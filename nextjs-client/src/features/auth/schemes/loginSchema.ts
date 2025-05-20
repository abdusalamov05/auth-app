import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email обязателен" })
    .email({ message: "Введите корректный адрес электронной почты" }),

  password: z
    .string()
    .min(1, { message: "Пароль обязателен" })
    .min(6, { message: "Пароль должен содержать хотя бы 6 символов" }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
