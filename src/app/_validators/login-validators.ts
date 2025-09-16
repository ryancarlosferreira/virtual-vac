import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email("Formato de e-mail inválido"),

  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(32, "A senha deve ter no máximo 32 caracteres"),

  cpf: z.string().regex(/^\d{11}$/, "CPF deve conter exatamente 11 números"),
});

export type loginFormData = z.infer<typeof loginFormSchema>;
