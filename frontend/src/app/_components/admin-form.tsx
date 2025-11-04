"use client";

import { Loader } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";

import { AdminData, adminSchema } from "@/app/_validators/admin-validator";
import api from "@/axios/api";
import { Textarea } from "@/components/ui/textarea";

export default function AdminForm() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<AdminData>({
    resolver: zodResolver(adminSchema),
  });

  const onSubmit = async (data: AdminData): Promise<void> => {
    try {
      const response = await api.post("/admin/vaccines", data);
      if (response.status === 201) {
        toast.success("Vacina registrada com sucesso!");
      } else {
        toast.error("Erro ao registrar vacina. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao registrar vacina:", error);
      toast.error("Erro ao registrar vacina. Tente novamente.");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Registrar Nova Vacina
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Nome da Vacina */}
          <div>
            <Label htmlFor="vaccineName">Nome da Vacina:</Label>
            <Select {...register("vaccineName")}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a vacina" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dupla-adulto">Dupla Adulto</SelectItem>
                <SelectItem value="hepatite-b">Hepatite B</SelectItem>
                <SelectItem value="febre-amarela">Febre Amarela</SelectItem>
                <SelectItem value="triplice-viral">Tríplice Viral</SelectItem>
                <SelectItem value="covid-19">COVID-19</SelectItem>
                <SelectItem value="influenza">Influenza</SelectItem>
                <SelectItem value="hpv">HPV</SelectItem>
                <SelectItem value="varicela">Varicela</SelectItem>
                <SelectItem value="meningococica-acwy">
                  Meningocócica ACWY
                </SelectItem>
                <SelectItem value="pneumococica-23-valente">
                  Pneumocócica 23-valente
                </SelectItem>
              </SelectContent>
            </Select>
            <p className="text-red-500 mt-1 text-xs">
              <ErrorMessage errors={errors} name="vaccineName" />
            </p>
          </div>

          {/* Categoria */}
          <div>
            <Label htmlFor="category">Categoria:</Label>
            <Select {...register("category")}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o público-alvo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="adultos">Adultos</SelectItem>
                <SelectItem value="gestantes">Gestantes</SelectItem>
                <SelectItem value="infantis">Infantis</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-red-500 mt-1 text-xs">
              <ErrorMessage errors={errors} name="category" />
            </p>
          </div>

          {/* Doses */}
          <div>
            <Label htmlFor="doses">Dosagem:</Label>
            <Select {...register("doses")}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a dose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="primeira">Primeira Dose</SelectItem>
                <SelectItem value="segunda">Segunda Dose</SelectItem>
                <SelectItem value="terceira">Terceira Dose</SelectItem>
                <SelectItem value="reforco">Reforço</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-red-500 mt-1 text-xs">
              <ErrorMessage errors={errors} name="doses" />
            </p>
          </div>

          {/* Observações */}
          <div>
            <Label htmlFor="observations">Observações:</Label>
            <Textarea
              placeholder="Ex: Aplicar apenas em caso de surto"
              {...register("observations")}
            />
            <p className="text-red-500 mt-1 text-xs">
              <ErrorMessage errors={errors} name="observations" />
            </p>
          </div>

          <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-500 hover:bg-green-600 cursor-pointer w-full text-md
          font-bold rounded-xl shadow-lg transition-all"
        >
          {isSubmitting ? <Loader className="animated-spin" /> : "Registrar Vacina"}
        </Button>
        </CardContent>
      </Card>
    </form>
  );
}
