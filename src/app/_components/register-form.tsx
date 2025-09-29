"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { useHookFormMask } from "use-mask-input";
import { Eye, EyeOff, Loader } from "lucide-react";

import {
  registerSchema,
  RegisterData,
} from "@/app/_validators/register-validators";

export function RegisterForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const registerWithMask = useHookFormMask(register);

  const onSubmit = async (data: RegisterData): Promise<void> => {
  // Remove máscara do telefone
  const normalizedPhone = data.phone.replace(/\D/g, "");
  // Remove máscara do CPF
  const normalizedCpf = data.cpf.replace(/\D/g, "");

  const normalizedData = {
    ...data,
    phone: normalizedPhone,
    cpf: normalizedCpf,
  };

  console.log("Dados normalizados:", normalizedData);
  // Aqui enviar normalizedData para a API ou salvar no banco

  toast.success("Cadastro realizado com sucesso!");
  router.replace("/dashboard");
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-2 w-full max-w-sm p-4"
    >
      <p className="text-cyan-600 font-semibold text-2xl sm:text-3xl mb-2">
        Cadastre-se
      </p>

      {/* input nome */}
      <div className="w-full">
        <Label htmlFor="name" className="mb-1 text-cyan-600">
          Nome Completo:
        </Label>
        <Input
          id="name"
          type="text"
          {...register("name")}
          className="border border-green-300
          focus:border-green-400 focus:ring-2 focus:ring-green-200
          hover:border-green-400"
        />
        <p className="text-red-500 mt-1 text-xs">
          <ErrorMessage errors={errors} name="name" />
        </p>
      </div>

      {/* input email */}
      <div className="w-full">
        <Label htmlFor="email" className="mb-1 text-cyan-600">
          Email:
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="border border-green-300
          focus:border-green-400 focus:ring-2 focus:ring-green-200
          hover:border-green-400"
        />
        <p className="text-red-500 mt-1 text-xs">
          <ErrorMessage errors={errors} name="email" />
        </p>
      </div>

      {/* input telefone */}
      <div className="w-full">
        <Label htmlFor="phone" className="mb-1 text-cyan-600">
          Telefone:
        </Label>
        <Input
          id="phone"
          type="text"
          {...registerWithMask("phone", "(99) 99999-9999")}
          className="border border-green-300
          focus:border-green-400 focus:ring-2 focus:ring-green-200
          hover:border-green-400"
        />
        <p className="text-red-500 mt-1 text-xs">
          <ErrorMessage errors={errors} name="phone" />
        </p>
      </div>

      {/* input cpf */}
      <div className="w-full">
        <Label htmlFor="cpf" className="mb-1 text-cyan-600">
          CPF:
        </Label>
        <Input
          id="cpf"
          type="text"
          {...registerWithMask("cpf", "999.999.999-99")}
          className="border border-green-300
          focus:border-green-400 focus:ring-2 focus:ring-green-200
          hover:border-green-400"
        />
        <p className="text-red-500 mt-1 text-xs">
          <ErrorMessage errors={errors} name="cpf" />
        </p>
      </div>

      {/* input senha */}
      <div className="w-full">
        <Label htmlFor="password" className="mb-1 text-cyan-600">
          Senha:
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            {...register("password")}
            className="border border-green-300
            focus:border-green-400 focus:ring-2 focus:ring-green-200
            hover:border-green-400"
          />
          <span className="absolute top-2 right-3">
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Eye size={20} className="cursor-pointer text-green-500" />
              ) : (
                <EyeOff size={20} className="cursor-pointer text-green-500" />
              )}
            </button>
          </span>
        </div>
        <p className="text-red-500 mt-1 text-xs">
          <ErrorMessage errors={errors} name="password" />
        </p>
      </div>

      {/* input confirmar senha */}
      <div className="w-full">
        <Label htmlFor="confirmPassword" className="mb-1 text-cyan-600">
          Confirmar Senha:
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={isPasswordVisible ? "text" : "password"}
            {...register("confirmPassword")}
            className="border border-green-300
            focus:border-green-400 focus:ring-2 focus:ring-green-200
            hover:border-green-400"
          />
          <span className="absolute top-2 right-3">
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Eye size={20} className="cursor-pointer text-green-500" />
              ) : (
                <EyeOff size={20} className="cursor-pointer text-green-500" />
              )}
            </button>
          </span>
        </div>
        <p className="text-red-500 mt-1 text-xs">
          <ErrorMessage errors={errors} name="confirmPassword" />
        </p>
      </div>

      {/* links e botão */}
      <footer className="flex flex-col items-center w-full mt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-500 hover:bg-green-600 cursor-pointer w-full text-md
          font-bold rounded-xl shadow-lg transition-all"
        >
          {isSubmitting ? <Loader className="animated-spin" /> : "Cadastrar"}
        </Button>

        <p className="text-cyan-600 mt-2">Já tem uma conta?</p>
        <Link href="/" className="text-cyan-600 underline hover:text-cyan-800">
          Login
        </Link>
      </footer>
    </form>
  );
}
