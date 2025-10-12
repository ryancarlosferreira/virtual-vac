import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "O nome precisa ser preenchido")
      .max(255, "O nome deve ter no máximo 255 caracteres"),

    email: z
      .email("Digite um email válido")
      .max(255, "O email deve ter no máximo 255 caracteres"),

    phone: z
      .string()
      .min(1, "O telefone precisa ser preenchido")
      .regex(/^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/, "Número de telefone inválido"),

    cpf: z
      .string()
      .min(1, "O CPF precisa ser preenchido")
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),

    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .max(32, "A senha deve ter no máximo 32 caracteres"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // aponta o erro para o campo correto
  });

export type RegisterData = z.infer<typeof registerSchema>;
