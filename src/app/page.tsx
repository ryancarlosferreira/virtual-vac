

import { Mail, LockKeyhole } from "lucide-react";

import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { AuthLink } from "@/components/AuthLink";
import { Button } from "@/components/Button";

export default function Home() { 

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-gradient-to-b from-green-400 to-white gap-6 ">
      <div className="inline-flex items-center italic font-bold">
        <Logo />
        <h1 className="text-green-500 text-4xl sm:text-5xl">Virtual VAC</h1>
      </div>

      <div className="flex flex-col gap-4">
        <Input placeholder="Usuário">
          <Mail className="text-green-600" />
        </Input>

        <Input placeholder="Senha">
          <LockKeyhole className="text-green-600" />
        </Input>
      </div>

      <div className="flex gap-4">
        <AuthLink href="/forgot">Esqueci minha senha</AuthLink>
        <AuthLink href="/signup">Cadastre-se</AuthLink>
      </div>

      <Button>Entrar</Button>
    </div>
  );
}
// onClick={() => router.push("/forgot")} // colocar isso daqui no button, pesquisar sobre