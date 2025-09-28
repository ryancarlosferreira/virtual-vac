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

import {
  registerSchema,
  RegisterData,
} from "@/app/_validators/register-validators";

export function RegisterForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const registerWithMask = useHookFormMask(register);

  //
  const onSubmit = async (data: RegisterData): Promise<void> => {
    console.log("Dados validados:", data);

    // const res = await fetch ("https:// ENDPOINT API //", {method: "POST",
    // body: JSON.stringfy(data)});
    //
    // const resData = await res.json();
    // console.log(resData);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-2 w-full max-w-sm p-4"
    >
      <p className="text-cyan-600 font-bold text-2xl sm:text-3xl mb-2">
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
          {...register("name", {
            required: "O nome é obrigatório",
            minLength: {
              value: 3,
              message: "O nome deve ter pelo menos 3 caracteres",
            },
            maxLength: {
              value: 255,
              message: "O nome deve ter no máximo 255 caracteres",
            },
          })}
          className="border border-green-300
          focus:border-green-400 focus:ring-2 focus:ring-green-200
          hover:border-green-400"
        />
        {errors.name && (
          <p className="text-red-500 mt-1 text-xs">{errors.name.message}</p>
        )}
      </div>

      {/* input email */}
      <div className="w-full">
        <Label htmlFor="email" className="mb-1 text-cyan-600">
          Email:
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "O email é obrigatório",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Formato de email inválido",
            },
            maxLength: {
              value: 255,
              message: "O email deve ter no máximo 255 caracteres",
            },
          })}
          className="border border-green-300
          focus:border-green-400 focus:ring-2 focus:ring-green-200
          hover:border-green-400"
        />
        {errors.email && (
          <p className="text-red-500 mt-1 text-xs">{errors.email.message}</p>
        )}
      </div>

      {/* input telefone */}
      <div className="w-full">
        <Label htmlFor="phone" className="mb-1 text-cyan-600">
          Telefone:
        </Label>
        <Input
          id="phone"
          type="text"
          {...registerWithMask("phone", "(99) 99999-9999", {
            required: "O telefone é obrigatório",
          })}
          className="border border-green-300
          focus:border-green-400 focus:ring-2 focus:ring-green-200
          hover:border-green-400"
        />
        {errors.phone && (
          <p className="text-red-500 mt-1 text-xs">{errors.phone.message}</p>
        )}
      </div>

      {/* input cpf */}
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

      {/* input senha */}
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

      {/* input confirmar senha */}
      <div className="w-full">
        <Label htmlFor="confirmPassword" className="mb-1 text-cyan-600">
          Confirmar Senha:
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={isPasswordVisible ? "text" : "password"}
            {...register("confirmPassword", {
              required: "A confirmação de senha é obrigatória",
              validate: (value) =>
                value === watch("password") || "As senhas não coincidem",
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
        {errors.confirmPassword && (
          <p className="text-red-500 mt-1 text-xs">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* links e botão */}
      <footer className="flex flex-col items-center w-full mt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-500 hover:bg-green-600 cursor-pointer w-full text-md
          flex justify-center items-center"
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
