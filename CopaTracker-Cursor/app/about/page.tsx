import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, SectionHeading } from "@/components/ui/Section";
import { AUTHOR, SITE, TECH_STACK } from "@/lib/constants";

export const metadata: Metadata = {
  title: AUTHOR.title,
  description: AUTHOR.bio,
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={AUTHOR.title}
          description={AUTHOR.bio}
        />

        <div className="mb-16 grid items-center gap-10 lg:grid-cols-[320px_1fr]">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-electric/30 to-turquoise/30 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white/15 shadow-card">
              <Image
                src={AUTHOR.photo}
                alt={`Retrato de ${AUTHOR.name}`}
                width={400}
                height={500}
                className="h-[420px] w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-2 rounded-full bg-vibrant px-4 py-2 text-sm font-bold shadow-card">
              ⚽ Albiceleste
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{AUTHOR.name}</h2>
            <p className="mt-4 text-white/80">{AUTHOR.bio}</p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Perfil profesional</h2>
          <Card>
            <p className="text-white/80">{AUTHOR.profile}</p>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Tecnologías</h2>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-sm font-medium text-electric"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Contacto</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <ContactCard
              label="GitHub"
              value="ailenpaez"
              href={AUTHOR.github}
            />
            <ContactCard
              label="LinkedIn"
              value="paezailenj"
              href={AUTHOR.linkedin}
            />
            <ContactCard
              label="Correo"
              value={AUTHOR.email}
              href={`mailto:${AUTHOR.email}`}
            />
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-electric px-8 py-3 font-semibold text-white transition hover:bg-electric/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
          >
            Volver a {SITE.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-turquoise hover:shadow-glow"
    >
      <p className="text-sm uppercase tracking-wider text-turquoise">{label}</p>
      <p className="mt-2 font-medium text-white/90">{value}</p>
    </a>
  );
}
