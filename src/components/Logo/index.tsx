import Image from "next/image";
export function Logo() {
  return (
    <div className="inline-flex items-center italic font-bold">
      <p className="text-green-500 text-4xl sm:text-5xl">
        Virtual
      </p>
      <Image
        priority
        src="/logo.png"
        alt="Logo do site"
        width={200}
        height={200}
        className="w-16 h-16 sm:w-20 sm:h-20"
      />
      <p className="text-green-500 text-4xl sm:text-5xl">AC</p>
    </div>
  );
}

