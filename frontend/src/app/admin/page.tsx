import AdminForm from "../_components/admin-form";
import VaccineContentClient from "../vaccines/VaccineContentClient";

export default function VaccineRegister() {
  return (
    <VaccineContentClient>
    <main className="flex flex-col min-h-screen w-full pt-20
      bg-gradient-to-bl from-green-200 via-white to-green-100">
      <AdminForm />
    </main>
    </VaccineContentClient>
  );
}
