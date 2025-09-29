"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ButtonSignOut() {
  const router = useRouter();

  async function signOut() {
    router.replace("/");
  }

  return (
    <Button
      onClick={signOut}
      className="bg-green-500 hover:bg-green-600 cursor-pointer w-full text-md max-w-sm
          font-bold rounded-xl shadow-lg transition-all"
    >
      Sair da conta
    </Button>
  );
}
