import { z } from "zod";

/*
  Zod schema para validar os objetos VaccineCard recebidos do backend
  - permite validação em runtime (protege contra payloads inesperados)
  - derive o tipo VaccineCard com z.infer
*/
export const vaccineCardSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  cpf: z.string().optional(),
  vaccineName: z.string().min(1),
  date: z.string().min(1),
  interval: z.string().optional(),
  intervalCustom: z.string().optional(),
  category: z.string().optional(),
  dose: z.string().optional(),
  observations: z.string().optional(),
  status: z.string().optional(),
  nextDoseDate: z.string().optional(),
});

export type VaccineCard = z.infer<typeof vaccineCardSchema>;