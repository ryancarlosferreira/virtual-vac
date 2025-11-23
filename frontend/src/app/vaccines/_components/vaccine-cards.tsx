"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { VaccineCard, vaccineCardSchema } from "../_validators/vaccine-cards-validator";

/*
  Ajustes feitos:
  - valida cada item quando a resposta é um array (não presume que exista um schema.array())
  - trata resposta única (objeto) também
  - loga erros de validação individuais e continua com os itens válidos
  - mantém os imports originais
*/

export default function VaccineCards({ vaccineName }: { vaccineName?: string }) {
  const [cards, setCards] = useState<VaccineCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    const url = vaccineName
      ? `/api/vaccine-card/vaccine/${encodeURIComponent(vaccineName)}`
      : `/api/vaccine-card`;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Erro ${res.status} ${res.statusText}`);

        const json = await res.json();

        const validatedItems: VaccineCard[] = [];

        if (Array.isArray(json)) {
          // valida item a item, registra erros mas não quebra o carregamento dos válidos
          for (const item of json) {
            const parsed = vaccineCardSchema.safeParse(item);
            if (parsed.success) validatedItems.push(parsed.data);
            else console.error("Item inválido do backend:", parsed.error);
          }
        } else if (json && typeof json === "object") {
          const parsed = vaccineCardSchema.safeParse(json);
          if (parsed.success) validatedItems.push(parsed.data);
          else {
            console.error("Resposta inválida do backend:", parsed.error);
            throw new Error("Resposta do servidor em formato inesperado");
          }
        } else {
          throw new Error("Resposta do servidor em formato inesperado");
        }

        if (!mounted) return;
        setCards(validatedItems);
      } catch (err: unknown) {
        // trata abort e outros erros
        if (typeof DOMException !== "undefined" && err instanceof DOMException && err.name === "AbortError") return;
        const message = err instanceof Error ? err.message : String(err);
        console.error("Erro ao buscar cartões:", err);
        if (mounted) setError(message ?? "Erro ao carregar dados");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [vaccineName]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (cards.length === 0) return <div>Nenhum registro encontrado.</div>;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((c) => (
        <Card key={c.id} className="h-full">
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <CardTitle className="text-lg min-w-0 truncate">{c.vaccineName}</CardTitle>
              <span className="text-sm text-muted-foreground ml-4">{c.date}</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-semibold truncate">{c.name}</p>
            <p className="text-sm text-muted-foreground">CPF: {c.cpf ?? "-"}</p>
            <p className="mt-2 text-sm">Dose: {c.dose ?? "-"} • Categoria: {c.category ?? "-"}</p>
            {c.observations && <p className="mt-2 text-xs text-muted-foreground">Obs: {c.observations}</p>}
          </CardContent>
        </Card>
      ))}
    </section>
  );
}