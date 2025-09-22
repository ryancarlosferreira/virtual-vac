import { z } from "zod";

// IMPROVISADO, FALTA REFORMULAR

export const loginSchema = z.object({
  cpf: z.string().regex(/^\d{11}$/, "CPF deve conter exatamente 11 números"),

  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(32, "A senha deve ter no máximo 32 caracteres"),
});

export type LoginData = z.infer<typeof loginSchema>;
