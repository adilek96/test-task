"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginUserService } from "../services/authService";


const config = {
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

interface LoginUserProps {
    email: string;
    password: string;
  }

export async function loginAction(prevState: any, formData: FormData) {

  // Извлечение данных формы
  const password = formData.get("password") as string | null;
  const email = formData.get("email") as string | null;

   // Проверка данных, если поле почты или пароля будет пустым то отсылаем в компонент ошибку через превстейт
   // Дополнительно можно было бы валидировать поля с помощью zod

   if (!password || !email) {
    return {
      ...prevState,
      errors: "Email and password are required.",
    };
  }

// Если проверка прошла успешно то создаем обьект и стучимся к серверу за токеном
    const userData: LoginUserProps = {
        password: password,
        email: email,
    }
    const responseData = await loginUserService(userData);

// Если от сервера пришла ошибка или данные для входа неверные  то отсылаем в компонент ошибку через превстей
    if (!responseData) {
        return {
          ...prevState,
          error: "Server error.",
         
        };
      }

// Если все ок то записываем токен в куки
        cookies().set("refresh_token", responseData.refresh_token, {
            ...config,
            maxAge: 60 * 60 * 24 * 7, // 7 дней
          
          });

          cookies().set("access_token", responseData.access_token, {
            ...config,
            maxAge: 60 * 60, // 1 час
          });

          redirect("/myInfo/timeOff")
}