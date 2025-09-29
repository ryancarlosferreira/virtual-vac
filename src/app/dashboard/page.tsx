import { ButtonSignOut } from "./_components/button-signout";

export default async function Dashboard() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center flex-col p-4
      bg-gradient-to-bl from-green-200 via-white to-green-100"
    >
      <h1 className="text-2xl font-bold mb-2">Página dashboard</h1>
      <h3>Usuario logado: Visitante</h3>
      <ButtonSignOut />
    </div>
  );
}
