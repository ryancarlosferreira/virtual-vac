import { Logo } from "@/components/Logo";
import { RegisterForm } from "../_components/register-form";

export default function SignUp() {
  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center px-4
      bg-gradient-to-bl from-green-200 via-white to-green-100">
      <header className="inline-flex items-center italic font-bold"
              >
        <Logo />
        <h1 className="text-green-500 text-4xl sm:text-5xl">Virtual VAC</h1>
      </header>

      <RegisterForm />

    </div>
  );
}
