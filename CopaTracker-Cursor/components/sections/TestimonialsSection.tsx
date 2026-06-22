import { Card, SectionHeading } from "@/components/ui/Section";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen los aficionados"
          description="Experiencias ficticias de usuarios que siguen el Mundial con CopaTracker."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <Card key={item.name}>
              <p className="mb-6 text-white/80">&ldquo;{item.comment}&rdquo;</p>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-turquoise">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
