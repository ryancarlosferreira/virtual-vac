"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import { LoginData, loginSchema } from "@/app/_validators/login-validators";

import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
      console.log("Dados validados:", data);
    };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  /* função para validar login futuramente
  async function login() {
    router.replace("/dashboard");
  }
  */

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-2 w-full max-w-sm p-4"
    >
      <p className="text-cyan-600 font-bold text-2xl mb-2">Login</p>

      <div className="w-full">
        <Label htmlFor="cpf" className="mb-1 text-cyan-600">
          CPF:
        </Label>
        <Input type="text" id="cpf" {...form.register("cpf")} />
        {form.formState.errors.password && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.cpf?.message}
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
            id="password"
            {...form.register("password")}
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
          <p className="text-red-500 text-sm">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>

      {/* links e botão */}
      <footer className="flex flex-col items-center w-full">
        <Link
          href="/forgot"
          className="text-cyan-600 underline hover:text-cyan-800 mb-2"
        >
          Esqueci minha senha
        </Link>

        <Button
          type="submit"
          className="bg-green-500 hover:bg-green-500 cursor-pointer w-full text-md"
        >
          Entrar
        </Button>

        <p className="text-cyan-600 mt-2">Não tem uma conta?</p>
        <Link
          href="/signup"
          className="text-cyan-600 underline hover:text-cyan-800"
        >
          Cadastre-se
        </Link>
      </footer>
    </form>
  );
}
