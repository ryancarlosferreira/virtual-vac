import { Logo } from "@/components/Logo";
import LoginForm from "./_components/login-form";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <header className="inline-flex items-center italic font-bold">
        <Logo />
        <h1 className="text-green-500 text-4xl sm:text-5xl">Virtual VAC</h1>
      </header>

      <LoginForm />

    </div>
  );
}
