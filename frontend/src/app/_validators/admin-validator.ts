import { z } from "zod";

export const adminSchema = z.object({
  name: z
    .string()
    .min(1, "O nome precisa ser preenchido")
    .max(255, "O nome deve ter no máximo 255 caracteres"),

  cpf: z
    .string()
    .min(1, "O CPF precisa ser preenchido")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),

  date: z
    .string()
    .min(1, "A data de aplicação é obrigatória")
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Formato de data deve ser DD/MM/YYYY")
    .refine(
      (val) => {
        const [dayStr, monthStr, yearStr] = val.split("/");
        const day = Number(dayStr);
        const month = Number(monthStr);
        const year = Number(yearStr);

        // checa números válidos
        if (
          !Number.isInteger(day) ||
          !Number.isInteger(month) ||
          !Number.isInteger(year)
        ) {
          return false;
        }

        // cria data e valida componentes (evita 31/02, etc.)
        const d = new Date(year, month - 1, day);
        return (
          d.getFullYear() === year &&
          d.getMonth() === month - 1 &&
          d.getDate() === day
        );
      },
      { message: "Data inválida" }
    )
    .refine(
      (val) => {
        const [dayStr, monthStr, yearStr] = val.split("/");
        const day = Number(dayStr);
        const month = Number(monthStr) - 1;
        const year = Number(yearStr);
        const d = new Date(year, month, day);

        const now = new Date();
        now.setHours(23, 59, 59, 999);
        return d <= now;
      },
      { message: "A data não pode ser no futuro" }
    ),

  vaccineName: z.string().min(1, "O nome da vacina é obrigatório").max(100),

  interval: z.string().min(1, "O intervalo entre doses é obrigatório").max(50),

  intervalCustom: z.string().max(100, "Máximo 100 caracteres").optional(),

  category: z.string().min(1, "A categoria é obrigatória").max(50),

  dose: z.string().min(1, "A dose é obrigatória").max(50),

  observations: z
    .string()
    .max(500, "As observações devem ter no máximo 500 caracteres")
    .optional(),
});

export type AdminData = z.infer<typeof adminSchema>;
