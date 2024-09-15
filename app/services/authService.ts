import { gql } from '@apollo/client';
import {client} from '@/lib/client'; // Импортируйте настроенный Apollo Client

interface LoginUserProps {
  email: string;
  password: string;
}


const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;





export async function loginUserService(userData: LoginUserProps) {
  const variables = {
    email: userData.email,
    password: userData.password,
  };
try {
    const { data } = await client.mutate({
        mutation: LOGIN_MUTATION,
        variables,
      });
      return data.login
  
} catch (error) {
    return null
}
   
}






// Мутация для обновления токена
const REFRESH_MUTATION = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access_token
      refresh_token
    }
  }
`;

// Сервис для обновления токена
export async function refreshTokenService(refreshToken: string) {
  try {
    const { data } = await client.mutate({
      mutation: REFRESH_MUTATION,
      variables: {
        refreshToken, 
      },
    });
    
   
    return data.refreshToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
}
