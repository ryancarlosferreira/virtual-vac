"use client";

import AdminForm from "../_components/admin-form";
import VaccineContentClient from "../vaccines/VaccineContentClient";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { logout } from "@/lib/auth";

export default function VaccineRegister() {
  return (
    <VaccineContentClient>
    <main className="flex flex-col min-h-screen w-full pt-20
      bg-gradient-to-bl from-green-200 via-white to-green-100">
      <div className="absolute top-4 right-4">
        <Button
          onClick={logout}
          variant="outline"
          className="flex items-center gap-2 border-red-200 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 text-red-500" />
          Sair
        </Button>
      </div>
      <AdminForm />
    </main>
    </VaccineContentClient>
  );
}
