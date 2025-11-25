import VaccineContentClient from './VaccineContentClient';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";

import {
  Baby,
  HeartPulse,
  Home,
  LogOut,
  Package,
  PanelBottom,
} from "lucide-react";

export default function VaccinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VaccineContentClient>
    <div
      className="flex flex-col min-h-screen w-full
      bg-gradient-to-bl from-green-200 via-white to-green-100"
    >
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="/vaccines"
              className="flex h-9 w-9 shrink-0 items-center justify-center"
            >
              <Image
                src="/logo.png"
                alt="Logo Virtual VAC"
                width={200}
                height={200}
              />
              <Package className="h4 w-4" />
              <span className="sr-only">Logo Virtual VAC</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/vaccines"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Home className="h5 w-5" />
                  <span className="sr-only">Início</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/vaccines/gestantes"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <HeartPulse className="h5 w-5" />
                  <span className="sr-only">Gestantes</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Gestantes</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/vaccines/infantis"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Baby className="h5 w-5" />
                  <span className="sr-only">Infantis</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Infantis</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LogOut className="h5 w-5 text-red-500" />
                  <span className="sr-only">Sair</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header
          className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static
          sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only">Abrir / Fechar Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="sm:max-w-xs h-full flex flex-col"
            >
              <SheetHeader className="flex flex-col h-full">
                <SheetTitle className="flex items-center gap-2 mb-2 text-green-500 text-2xl">
                  <Link
                    href="/vaccines"
                    className="flex h-10 w-10 text-lg
                    items-center justify-center"
                    prefetch={false}
                  >
                    <Image
                      src="/logo.png"
                      alt="Logo Virtual VAC"
                      width={200}
                      height={200}
                    />
                    <span className="sr-only">Logo Virtual VAC</span>
                  </Link>
                  <Link href="/vaccines">Virtual VAC</Link>
                </SheetTitle>
                <SheetDescription className="mt-4 text-cyan-600 mb-1 ml-1">
                  Escolha uma opção de cartão:
                </SheetDescription>

                <nav className="grid gap-4 text-lg font-medium">
                  <Link
                    href="/vaccines"
                    className="flex items-center gap-4 px-2.5 p-2 text-cyan-600 border
                    border-green-200 shadow-md rounded-md bg-white"
                    prefetch={false}
                  >
                    <Home className="h-5 w-5 transition-all" />
                    Início
                    <span className="sr-only">Início</span>
                  </Link>

                  <Link
                    href="/vaccines/gestantes"
                    className="flex items-center gap-4 px-2.5 p-2 text-cyan-600 border
                    border-green-200 shadow-md rounded-md bg-white"
                    prefetch={false}
                  >
                    <HeartPulse className="h-5 w-5 transition-all" />
                    Gestantes
                    <span className="sr-only">Gestantes</span>
                  </Link>

                  <Link
                    href="/vaccines/infantis"
                    className="flex items-center gap-4 px-2.5 p-2 text-cyan-600 border
                    border-green-200 shadow-md rounded-md bg-white"
                    prefetch={false}
                  >
                    <Baby className="h-5 w-5 transition-all" />
                    Infantis
                    <span className="sr-only">Infantis</span>
                  </Link>
                </nav>

                <nav className="mt-auto flex flex-col gap-4 py-5">
                  <Link
                    href="/"
                    className="flex h-9 w-9 items-center justify-center border border-red-200
                    shadow-md rounded-md bg-white"
                  >
                    <LogOut className="h5 w-5 text-red-500" />
                    <span className="sr-only">Sair</span>
                  </Link>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
      <main className="sm:ml-14 p-4 w-full">{children}</main>
    </div>
    </VaccineContentClient>
  );
}
