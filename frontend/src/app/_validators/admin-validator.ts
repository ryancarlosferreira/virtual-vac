import { z } from "zod";

export const adminSchema = z.object({
  vaccineName: z
    .string()
    .min(1, "O nome da vacina é obrigatório")
    .max(100),

  category: z
    .string()
    .min(1, "A categoria é obrigatória")
    .max(50),

  doses: z
    .string()
    .min(1, "A dose é obrigatória")
    .max(50),


    observations: z
    .string()
    .max(500, "As observações devem ter no máximo 500 caracteres"),
});

export type AdminData = z.infer<typeof adminSchema>;