"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginFormData,
  loginFormSchema,
} from "@/app/_validators/login-validators";

// import { Mail, LockKeyhole } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  // função para validar login futuramente
  async function login() {
    router.replace("/dashboard");
  }

  function onSubmit(data: loginFormData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-2"
    >
      <p className="text-cyan-600 font-bold text-2xl">Login</p>

      {/* div dos inputs */}
      <div className="flex flex-col gap-2 w-2xs">
        <div>
          <Input type="email" placeholder="Email" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Senha"
            {...form.register("password")}
          />
          {form.formState.errors.password && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <div>
          <Input
            type="cpf"
            placeholder="CPF"
            {...form.register("cpf")}
          />
          {form.formState.errors.password && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.cpf?.message}
            </p>
          )}
        </div>
      </div>

      {/* links e botão */}
      <footer className="flex flex-col items-center">
        <Link
          href="/forgot"
          className="text-cyan-600 underline hover:text-cyan-800 text-sm"
        >
          Esqueci minha senha
        </Link>

        <Button className="bg-green-500 mt-2 mb-1 cursor-pointer">
          Entrar
        </Button>

        <p className="text-cyan-600 text-sm">Já tem uma conta?</p>
        <Link
          href="/signup"
          className="text-cyan-600 underline hover:text-cyan-800 text-sm"
        >
          Cadastre-se
        </Link>
      </footer>
    </form>
  );
}
