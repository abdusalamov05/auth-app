import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string({ required_error: "Имя обязательно" })
      .min(1, { message: "Имя обязательно" }),
    email: z
      .string({ required_error: "Электронная почта обязательна" })
      .min(1, { message: "Электронная почта обязательна" })
      .email({ message: "Введите корректный адрес электронной почты" }),
    password: z
      .string({ required_error: "Пароль обязателен" })
      .min(6, { message: "Пароль должен содержать хотя бы 6 символов" }),
    passwordRepeat: z
      .string({ required_error: "Повтор пароля обязателен" })
      .min(6, { message: "Пароль должен содержать хотя бы 6 символов" }),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    path: ["passwordRepeat"],
    message: "Пароли не совпадают",
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
