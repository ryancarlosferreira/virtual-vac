import { Mail, LockKeyhole } from "lucide-react";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row w-screen h-screen justify-center items-center bg-gradient-to-b from-green-400 to-white gap-5">
      <div>
        <Logo />
      </div>

      <div className="flex flex-col gap-4">
        <Input placeholder="Usuário">
          <Mail className="m-2 text-green-600" />
        </Input>

        <Input placeholder="Senha">
          <LockKeyhole className="m-2 text-green-600" />
        </Input>
      </div>
    </div>
  );
}
