import Image from "next/image";

export function Logo() {
  return (
    <div className="inline-flex items-center">
      <h1 className="text-green-400 text-7xl">Virtual</h1>
      <Image src="/logo.png" alt="Logo do site" width={200} height={200} />
      <p className="text-green-400 text-7xl">AC</p>
    </div>
  );
}
