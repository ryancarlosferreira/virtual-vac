import Image from "next/image";
type LogoProps = React.ComponentProps<"div">

export function Logo(props: LogoProps) {
  return (
    <div className="inline-flex items-center italic font-bold" {...props}>
      <h1 className="text-green-500 text-7xl m-2">Virtual</h1>
      <Image className="-mt-30 -mr-10" src="/logo.png" alt="Logo do site" width={200} height={200} />
      <p className="text-green-500 text-7xl">AC</p>
    </div>
  );
}

// acho que não preciva dessa tipagem aí por enquanto