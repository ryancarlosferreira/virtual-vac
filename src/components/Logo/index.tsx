import Image from "next/image";

export function Logo() {
  return (
    <Image
      priority
      src="/logo.png"
      alt="Logo do site"
      width={200}
      height={200}
      className="w-16 h-16 sm:w-20 sm:h-20"
    />
  );
}
