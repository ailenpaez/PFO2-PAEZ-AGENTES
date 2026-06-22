import { Card, SectionHeading } from "@/components/ui/Section";
import { FEATURES } from "@/lib/constants";

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Características"
          title="Todo lo que necesitás para seguir el Mundial"
          description="Una plataforma pensada para aficionados, analistas y curiosos del fútbol internacional."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="gradient-card">
              <div className="mb-4 text-3xl" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
