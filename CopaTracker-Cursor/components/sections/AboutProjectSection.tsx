import { Card, SectionHeading } from "@/components/ui/Section";

const ITEMS = [
  "Consultar el fixture completo del torneo.",
  "Seguir resultados en tiempo real con actualización automática.",
  "Analizar cruces eliminatorios desde octavos hasta la final.",
  "Explorar el camino hacia la gran final del Mundial.",
];

export function AboutProjectSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sobre el proyecto"
          title="Tu plataforma para vivir el Mundial"
          description="CopaTracker 2026 centraliza toda la información del torneo en una experiencia moderna, rápida y accesible."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {ITEMS.map((item) => (
            <Card key={item} className="gradient-card">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/20 text-electric">
                  ✓
                </span>
                <p className="text-white/85">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
