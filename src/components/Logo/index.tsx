import Image from "next/image";
export function Logo() {
  return (
    <div className="inline-flex items-center italic font-bold">
      <p className="text-green-500 text-3xl sm:text-5xl md:text-7xl ">
        Virtual
      </p>
      <Image
        priority
        src="/logo.png"
        alt="Logo do site"
        width={200}
        height={200}
        className="w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 -mt-12 -mr-4 sm:-mt-24 sm:-mr-8"
      />
      <p className="text-green-500 text-3xl sm:text-5xl md:text-7xl mr-2">AC</p>
    </div>
  );
}

// acho que não preciva dessa tipagem aí por enquanto
