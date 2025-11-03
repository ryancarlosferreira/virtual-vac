import { z } from "zod";

export const loginSchema = z.object({
  email: z
      .email("Digite um email válido")
      .max(255, "O email deve ter no máximo 255 caracteres"),

  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(128, "A senha deve ter no máximo 128 caracteres"),
});

export type LoginData = z.infer<typeof loginSchema>;
