export default async function Details({ params }: { params: Promise<{ details: string }> }) {
  const { details } = await params;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detalhes da vacina: {details}</h1>
      <p>Aqui você pode exibir informações detalhadas da vacina selecionada.</p>
    </main>
  );
}
