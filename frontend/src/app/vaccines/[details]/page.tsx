import VaccineCards from "../_components/vaccine-cards";

/*
  Página server component (app router) que passa o parâmetro dynamic [details]
  para o componente cliente VaccineCards para carregar apenas os cards
  da vacina selecionada.
*/
export default function Details({ params }: { params: { details: string } }) {
  const { details } = params;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detalhes da vacina: {details}</h1>
      {/* VaccineCards é um componente client que fará a chamada ao backend */}
      <VaccineCards vaccineName={details} />
    </main>
  );
}