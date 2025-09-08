import { Mail, LockKeyhole } from "lucide-react";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { AuthLink } from "@/components/AuthLink";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row w-screen h-screen justify-center items-center bg-gradient-to-b from-green-400 to-white gap-6 sm:gap-10">
      <div>
        <Logo />
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
    </div>
  );
}
