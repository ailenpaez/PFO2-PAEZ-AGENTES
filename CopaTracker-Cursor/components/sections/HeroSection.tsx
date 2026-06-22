import Image from "next/image";
import { Button } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden gradient-hero py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,57,70,0.15),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-fadeIn">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white/90">
            Mundial FIFA 2026 · Tiempo real
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
            {SITE.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#fixture">Ver Fixture</Button>
            <Button href="#simulador" variant="secondary">
              Explorar Cruces
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg animate-fadeIn">
          <div className="absolute -inset-4 rounded-3xl bg-electric/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80"
              alt="Estadio de fútbol iluminado durante el Mundial"
              width={900}
              height={600}
              className="h-[320px] w-full object-cover sm:h-[420px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-navy/70 p-4 backdrop-blur-md">
              <p className="text-sm font-semibold text-turquoise">Copa del Mundo 2026</p>
              <p className="mt-1 text-sm text-white/80">
                Fixture, resultados en vivo y camino hacia la final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
