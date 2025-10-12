"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-4
       bg-gradient-to-bl from-green-200 via-white to-green-100"
    >
      <div className="flex flex-col items-center gap-4 p-8 ">
        <h1 className="text-4xl font-bold text-green-500">404</h1>
        <h2 className="text-xl font-semibold text-cyan-600 mb-2">
          Página não encontrada
        </h2>
        <p className="text-cyan-700 text-center mb-4">
          A página que você procura não existe ou foi movida.
          <br />
          Verifique o endereço ou volte para a página inicial.
        </p>
        <Link href="/" className="w-full">
          <Button
            className="bg-green-500 hover:bg-green-600 cursor-pointer w-full text-md
            flex justify-center items-center font-bold rounded-xl shadow-lg transition-all"
          >
            Voltar para o início
          </Button>
        </Link>
      </div>
    </div>
  );
}
