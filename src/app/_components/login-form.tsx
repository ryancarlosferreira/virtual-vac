"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormMask } from "use-mask-input";
import { Eye, EyeOff, Loader } from "lucide-react";

import { LoginData, loginSchema } from "@/app/_validators/login-validators";

export default function LoginForm() {
  //const router = useRouter();
  //router.replace("/dashboard");

  const {
    handleSubmit,
    register,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const registerWithMask = useHookFormMask(register);

  const onSubmit = (data: LoginData) => {
    console.log("Dados validados:", data);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-2 w-full max-w-sm p-4"
    >
      <p className="text-cyan-600 font-bold text-2xl mb-2">Login</p>

      <div className="w-full">
        <Label htmlFor="cpf" className="mb-1 text-cyan-600">
          CPF:
        </Label>
        <Input
          id="cpf"
          type="text"
          {...registerWithMask("cpf", "999.999.999-99", {
            required: "O CPF é obrigatório",
          })}
          className="border border-green-300
          focus:border-green-400 focus:ring-2 focus:ring-green-200
          hover:border-green-400"
        />
        {errors.cpf && (
          <p className="text-red-500 mt-1 text-xs">{errors.cpf.message}</p>
        )}
      </div>

      <div className="w-full">
        <Label htmlFor="password" className="mb-1 text-cyan-600">
          Senha:
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            {...register("password", {
              required: "A senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
              maxLength: {
                value: 128,
                message: "A senha deve ter no máximo 128 caracteres",
              },
            })}
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
        {errors.password && (
          <p className="text-red-500 mt-1 text-xs">{errors.password.message}</p>
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
          disabled={isSubmitting}
          className="bg-green-500 hover:bg-green-600 cursor-pointer w-full text-md
          flex justify-center items-center"
        >
          {isSubmitting ? <Loader className="animated-spin" /> : "Entrar"}
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
