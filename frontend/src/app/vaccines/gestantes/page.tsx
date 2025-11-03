import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Circle } from "lucide-react";

export default function Gestantes() {
  return (
    <main>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                dTpa - Difteria, Tétano e Coqueluche
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
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-green-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Em dia</h1>
              </div>
            </CardDescription>
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
          </CardHeader>

          <CardContent className="mt-auto">
            <CardDescription className="mb-2">
              <div className="inline-flex items-center justify-center gap-2">
                <Circle className="bg-red-600 ml-auto w-4 h-4 rounded-full" />
                <h1>Pendente</h1>
              </div>
            </CardDescription>
            <Button variant="outline" size="sm">
              Ver Detalhes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <CardTitle className="text-lg sm:text-lg text-gray-600 select-none">
                COVID - 19
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
            <Button variant="outline" size="sm">
              Ver Detalhes
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
