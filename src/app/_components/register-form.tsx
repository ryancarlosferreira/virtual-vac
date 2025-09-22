"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { withMask } from 'use-mask-input';

import {
  registerSchema,
  RegisterData,
} from "@/app/_validators/register-validators";

import { Eye, EyeOff } from "lucide-react";

/*
PRECISO REFINAR ESSA TELA, MUITA COISA PRA MUDAR
*/

export function RegisterForm() {
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterData) => {
    console.log("Dados validados:", data);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-2 w-full max-w-sm p-4"
    >
      <p className="text-cyan-600 font-bold text-2xl mb-2">Cadastre-se</p>

      <div className="w-full">
        <Label htmlFor="fullName" className="mb-1 text-cyan-600">
          Nome Completo:
        </Label>
        <Input
          type="text"
          {...form.register("fullName")}
          id="fullName"
          className=" p-2 rounded"
        />
        {form.formState.errors.fullName && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.fullName.message}
          </p>
        )}
      </div>

      <div className="w-full">
        <Label htmlFor="email" className="mb-1 text-cyan-600">
          Email:
        </Label>
        <Input
          type="email"
          {...form.register("email")}
          id="email"
          className=" p-2 rounded"
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div className="w-full">
        <Label htmlFor="phone" className="mb-1 text-cyan-600">
          Telefone:
        </Label>
        <Input
          type="text"
          {...form.register("phone")}
          id="phone"
          className=" p-2 rounded"
        />
        {form.formState.errors.phone && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.phone.message}
          </p>
        )}
      </div>

      <div className="w-full">
        <Label htmlFor="cpf" className="mb-1 text-cyan-600">
          CPF:
        </Label>
        <Input
          type="text"
          {...form.register("cpf")}
          id="cpf"
          className=" p-2 rounded"
        />
        {form.formState.errors.cpf && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.cpf.message}
          </p>
        )}
      </div>

      <div className="w-full">
        <Label htmlFor="sus" className="mb-1 text-cyan-600">
          SUS:
        </Label>
        <Input
          type="text"
          {...form.register("sus")}
          id="sus"
          className=" p-2 rounded"
        />
        {form.formState.errors.sus && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.sus.message}
          </p>
        )}
      </div>

      <div className="w-full">
        <Label htmlFor="password" className="mb-1 text-cyan-600">
          Senha:
        </Label>
        <div className="relative">
          <Input
            type={isPasswordVisible ? "text" : "password"}
            {...form.register("password")}
            id="password"
            className=" p-2 rounded"
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
        {form.formState.errors.password && (
          <p className="text-red-500 tex-sm">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>

      <div className="w-full">
        <Label htmlFor="confirmPassword" className="mb-1 text-cyan-600">
          Confirmar Senha:
        </Label>
        <div className="relative">
          <Input
            type={isPasswordVisible ? "text" : "password"}
            {...form.register("confirmPassword")}
            id="confirmPassword"
            className=" p-2 rounded"
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
        {form.formState.errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* links e botão */}
      <footer className="flex flex-col items-center w-full mt-2">
        <Button
          type="submit"
          className="bg-green-500 hover:bg-green-500 cursor-pointer w-full text-md"
        >
          Cadastrar
        </Button>

        <p className="text-cyan-600 mt-2">Já tem uma conta?</p>
        <Link href="/" className="text-cyan-600 underline hover:text-cyan-800">
          Login
        </Link>
      </footer>
    </form>
  );
}
