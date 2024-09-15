"use client";
import { loginAction } from "@/app/action/loginAction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { FormErrors } from "../custom/FormErrors";

const INITIAL_STATE = {
  error: null,
};

export function LoginForm() {
  const [formState, formAction] = useFormState(loginAction, INITIAL_STATE);

  return (
    <Card className="w-full max-w-sm">
      <form action={formAction}>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          {/* Оповещаем пользователя в случае ошибки */}
          <FormErrors error={formState?.error} />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
