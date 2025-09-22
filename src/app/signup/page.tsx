import { Logo } from "@/components/Logo";
import { RegisterForm } from "../_components/register-form";

export default function SignUp() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <header className="inline-flex items-center italic font-bold">
        <Logo />
        <h1 className="text-green-500 text-4xl sm:text-5xl">Virtual VAC</h1>
      </header>

      <RegisterForm />

    </div>
  );
}
