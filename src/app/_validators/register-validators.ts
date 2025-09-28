import { z } from "zod";

// IMPROVISADO, FALTA REFORMULAR

export const registerSchema = z
  .object({
    name: z.string()
      .min(3, "O nome deve ter pelo menos 3 caracteres")
      .max(100, "O nome não pode passar de 100 caracteres"),

    email: z.string()
      .email("Formato de e-mail inválido"),

    phone: z.string()
      .regex(/^\d{11}$/, "O número de celular deve conter exatamente 11 números"),

    cpf: z.string()
      .regex(/^\d{11}$/, "O CPF deve conter exatamente 11 números"),

    password: z.string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .max(32, "A senha deve ter no máximo 32 caracteres"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // aponta o erro para o campo correto
  });

export type RegisterData = z.infer<typeof registerSchema>;