import { cookies } from "next/headers";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { refreshTokenService } from "@/app/services/authService";

// Создаем заголовок аутентификации

const authLink = setContext(async (_, { headers }) => {
  //  Получения токенов из куки

  let accessToken = cookies().get("access_token")?.value;
  const decodedAccess = accessToken && jwtDecode(accessToken);

  const refreshToken = cookies().get("refresh_token")?.value;

  const isExpired =
    accessToken && dayjs.unix(decodedAccess.exp).isBefore(dayjs());

  if (isExpired && refreshToken) {
    const newAccessToken = await refreshTokenService(refreshToken); // Получаем новый токен, если он истек

    cookies().set("access_token", newAccessToken, {
      maxAge: 60 * 60,
    });

    accessToken = newAccessToken;
  }

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

// HttpLink для Apollo Client
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
});

// Регистрация Apollo Client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authLink, httpLink]),
});
