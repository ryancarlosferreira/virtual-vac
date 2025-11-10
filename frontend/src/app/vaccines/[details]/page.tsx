"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Circle } from "lucide-react";
import { useParams } from "next/navigation";

/*
 Componente que:
 - lê o param (slug da vacina) da rota,
 - consulta o backend em GET /api/vaccine-cards/vaccine/{slug},
 - renderiza os registros como cards.
*/
export interface VaccineCard {
  id: string | number;
  vaccine?: { name?: string } | null;
  vaccineName?: string;
  user?: { name?: string; cpf?: string } | null;
  userName?: string;
  userCpf?: string;
  date?: string;
  nextDoseDate?: string;
  status?: string;
}

export default function DetailsPage() {
  const params = useParams();
  const details = (params as { details?: string })?.details ?? ""; // detalhes (slug) vindo da rota
  const [cards, setCards] = useState<VaccineCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!details) return;
    setLoading(true);
    // busca os cards para a vacina (o backend expõe esse endpoint)
    fetch(`/api/vaccine-cards/vaccine/${encodeURIComponent(details)}`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data || []);
      })
      .catch((err) => {
        console.error("Erro ao buscar cards:", err);
      })
      .finally(() => setLoading(false));
  }, [details]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detalhes da vacina: {details}</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : cards.length === 0 ? (
        <p>Nenhum registro encontrado para essa vacina.</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((c) => (
            <Card key={c.id}>
              <CardHeader>
                <CardTitle>{c.vaccine?.name ?? c.vaccineName}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Paciente: {c.user?.name ?? c.userName}</p>
                      <p>CPF: {c.user?.cpf ?? c.userCpf}</p>
                      <p>Data: {c.date}</p>
                      <p>Próxima dose: {c.nextDoseDate}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <Circle className={`w-4 h-4 rounded-full ${c.status === "Em dia" || c.status === "em dia" ? "bg-green-600" : "bg-red-600"}`} />
                      <span className="text-sm">{c.status}</span>
                    </div>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>
      )}
    </main>
  );
}