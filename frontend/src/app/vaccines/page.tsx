import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Circle } from "lucide-react";
import Link from "next/link";

export default function Vaccines() {
  return (
    <main>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                Dupla Adulto
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-red-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Pendente</h1>
              </div>
            </CardDescription>
            <Button asChild variant="outline" size="sm">
              <Link href="/vaccines/dupla-adulto">Ver detalhes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                Hepatite B
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-green-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Em dia</h1>
              </div>
            </CardDescription>
            <Button asChild variant="outline" size="sm">
              <Link href="/vaccines/hepatite-b">Ver detalhes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                Febre Amarela
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-red-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Pendente</h1>
              </div>
            </CardDescription>
            <Button asChild variant="outline" size="sm">
              <Link href="/vaccines/febre-amarela">Ver detalhes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                Tríplice Viral
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-green-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Em dia</h1>
              </div>
            </CardDescription>
            <Button asChild variant="outline" size="sm">
              <Link href="/vaccines/triplice-viral">Ver detalhes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                COVID-19
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-green-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Em dia</h1>
              </div>
            </CardDescription>
            <Button asChild variant="outline" size="sm">
              <Link href="/vaccines/covid-19">Ver detalhes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                Influenza
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-red-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Pendente</h1>
              </div>
            </CardDescription>
            <Button asChild variant="outline" size="sm">
              <Link href="/vaccines/influenza">Ver detalhes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                HPV
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-green-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Em dia</h1>
              </div>
            </CardDescription>
            <Button asChild variant="outline" size="sm">
              <Link href="/vaccines/hpv">Ver detalhes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                Varicela
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-green-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Em dia</h1>
              </div>
            </CardDescription>
            <Button asChild variant="outline" size="sm">
              <Link href="/vaccines/varicela">Ver detalhes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                Meningocócica ACWY
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-red-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Pendente</h1>
              </div>
            </CardDescription>
            <Button asChild variant="outline" size="sm">
              <Link href="/vaccines/meningococica-acwy">Ver detalhes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                Pneumocócica 23-valente
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-red-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Pendente</h1>
              </div>
            </CardDescription>
            <Button asChild variant="outline" size="sm">
              <Link href="/vaccines/pneumococica-23-valente">Ver detalhes</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
