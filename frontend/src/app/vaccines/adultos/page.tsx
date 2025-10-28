import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Circle } from "lucide-react";

export default function Adultos() {
  return (
    <main>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                Dupla Adulto - Difteria e Tétano
              </CardTitle>
            </div>

            <CardDescription>
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-red-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Pendente</h1>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button variant="outline" size="sm">
              Ver Detalhes
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

             <CardDescription>
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-green-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Em dia</h1>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button variant="outline" size="sm">
              Ver Detalhes
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

             <CardDescription>
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-red-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Pendente</h1>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button variant="outline" size="sm">
              Ver Detalhes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                Tríplice Viral - Sarampo, Caxumba e Rubéola
              </CardTitle>
            </div>

             <CardDescription>
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-green-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Em dia</h1>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button variant="outline" size="sm">
              Ver Detalhes
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

             <CardDescription>
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-green-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Em dia</h1>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button variant="outline" size="sm">
              Ver Detalhes
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

             <CardDescription>
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-red-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Pendente</h1>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button variant="outline" size="sm">
              Ver Detalhes
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

             <CardDescription>
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-green-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Em dia</h1>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button variant="outline" size="sm">
              Ver Detalhes
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

             <CardDescription>
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-green-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Em dia</h1>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button variant="outline" size="sm">
              Ver Detalhes
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

             <CardDescription>
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-red-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Pendente</h1>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button variant="outline" size="sm">
              Ver Detalhes
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

             <CardDescription>
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-red-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Pendente</h1>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button variant="outline" size="sm">
              Ver Detalhes
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
