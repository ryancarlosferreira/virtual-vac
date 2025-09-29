import { z } from "zod";

export const loginSchema = z.object({
  cpf: z
    .string()
    .min(1, "Digite seu CPF")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),

  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(128, "A senha deve ter no máximo 128 caracteres"),
});

export type LoginData = z.infer<typeof loginSchema>;
