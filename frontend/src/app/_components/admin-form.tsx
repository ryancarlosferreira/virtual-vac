"use client";

import { Loader } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { useForm, Controller } from "react-hook-form";

import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { useHookFormMask } from "use-mask-input";

import { AdminData, adminSchema } from "@/app/_validators/admin-validator";
import api from "@/axios/api";
import { Textarea } from "@/components/ui/textarea";

export default function AdminForm() {
  const {
    handleSubmit,
    register,
    control,
    formState: { isSubmitting, errors },
  } = useForm<AdminData>({
    resolver: zodResolver(adminSchema),
    defaultValues: {
      name: "",
      cpf: "",
      date: "",
      vaccineName: "",
      interval: "",
      intervalCustom: "",
      category: "",
      dose: "",
      observations: "",
    },
  });

  const registerWithMask = useHookFormMask(register);

  const onSubmit = async (data: AdminData): Promise<void> => {
  // Remove máscara do CPF
  const normalizedCpf = data.cpf.replace(/\D/g, "");

    console.log("Dados do formulário:", data);
    // Monta payload exatamente conforme o DTO VaccineCardRequest
    const payload = {
      name: data.name,
      cpf: normalizedCpf,
      date: data.date, // formato já está DD/MM/YYYY por mask
      vaccineName: data.vaccineName,
      interval: data.interval,
      intervalCustom: data.intervalCustom,
      category: data.category,
      dose: data.dose,
      observations: data.observations,
    };
    try {
      const response = await api.post("/vaccine-card", payload);
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
          {/* Input Nome Paciente */}
          <div className="w-full">
            <Label htmlFor="name" className="mb-2">
              Nome do Paciente:
            </Label>
            <Input id="name" type="text" {...register("name")} />
            <p className="text-red-500 mt-1 text-xs">
              <ErrorMessage errors={errors} name="name" />
            </p>
          </div>

          {/* Input CPF e Data */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <Label htmlFor="cpf" className="mb-2">
                CPF do Paciente:
              </Label>
              <Input
                id="cpf"
                type="text"
                {...registerWithMask("cpf", "999.999.999-99")}
              />
              <p className="text-red-500 mt-1 text-xs">
                <ErrorMessage errors={errors} name="cpf" />
              </p>
            </div>

            <div>
              <Label htmlFor="date" className="mb-2">
                Data de Aplicação:
              </Label>
              <Input
                id="date"
                type="text"
                {...registerWithMask("date", "99/99/9999")}
              />
              <p className="text-red-500 mt-1 text-xs">
                <ErrorMessage errors={errors} name="date" />
              </p>
            </div>
          </div>

          {/* Nome Vacine e Intervalo */}
          <div className="md:grid md:grid-cols-2 mb-2 flex flex-col gap-2">
            {/* Nome da Vacina */}
            <div>
              <Label htmlFor="vaccineName" className="mb-2">
                Nome da Vacina:
              </Label>
              <Controller
                name="vaccineName"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a vacina" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dupla-adulto">Dupla Adulto</SelectItem>
                      <SelectItem value="hepatite-b">Hepatite B</SelectItem>
                      <SelectItem value="febre-amarela">
                        Febre Amarela
                      </SelectItem>
                      <SelectItem value="triplice-viral">
                        Tríplice Viral
                      </SelectItem>
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
                )}
              />
              <p className="text-red-500 mt-1 text-xs">
                <ErrorMessage errors={errors} name="vaccineName" />
              </p>
            </div>

            {/* Intervalo */}
            <div>
              <Label htmlFor="interval" className="mb-2">
                Intervalo:
              </Label>

              <Controller
                name="interval"
                control={control}
                render={({ field }) => (
                  <div>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o intervalo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 dias</SelectItem>
                        <SelectItem value="60">60 dias</SelectItem>
                        <SelectItem value="90">90 dias</SelectItem>
                        <SelectItem value="180">6 meses</SelectItem>
                        <SelectItem value="365">1 ano</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* quando escolher "Outro", exibe um input utilizável */}
                    {field.value === "other" && (
                      <div className="mt-2">
                        <Input
                          placeholder="Informe o intervalo (dias / descrição)"
                          {...register("intervalCustom")}
                        />
                      </div>
                    )}
                  </div>
                )}
              />
              <p className="text-red-500 mt-1 text-xs">
                <ErrorMessage errors={errors} name="category" />
              </p>
            </div>
          </div>

          {/* Dosagem e Categoria*/}
          <div className="md:grid md:grid-cols-2 mb-2 flex flex-col gap-2">
            {/* Doses */}
            <div>
              <Label htmlFor="dose" className="mb-2">
                Dosagem:
              </Label>

              <Controller
                name="dose"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
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
                )}
              />
              <p className="text-red-500 mt-1 text-xs">
                <ErrorMessage errors={errors} name="dose" />
              </p>
            </div>

            {/* Categoria */}
            <div>
              <Label htmlFor="category" className="mb-2">
                Categoria:
              </Label>

              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o público-alvo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="adulto">Adulto</SelectItem>
                      <SelectItem value="gestante">Gestante</SelectItem>
                      <SelectItem value="infantil">Infantil</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <p className="text-red-500 mt-1 text-xs">
                <ErrorMessage errors={errors} name="category" />
              </p>
            </div>
          </div>

          {/* Observações */}
          <div>
            <Label htmlFor="observations" className="mb-2">
              Observações:
            </Label>
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
            {isSubmitting ? (
              <Loader className="animated-spin" />
            ) : (
              "Registrar Vacina"
            )}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
