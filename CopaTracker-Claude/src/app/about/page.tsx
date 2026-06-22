import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getTechEmoji } from "@/lib/emojis";

export const metadata: Metadata = {
  title: "Sobre la autora | CopaTracker 2026",
  description: "Conocé a Ailén Páez, la desarrolladora detrás de CopaTracker 2026.",
};

const TECHS = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "AWS" },
  { name: "Git" },
  { name: "GitHub" },
];

const CONTACTS = [
  {
    label: "GitHub",
    value: "ailenpaez",
    href: "https://github.com/ailenpaez",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    color: "hover:border-white/30",
  },
  {
    label: "LinkedIn",
    value: "paezailenj",
    href: "https://www.linkedin.com/in/paezailenj/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "hover:border-[#007BFF]/40",
  },
  {
    label: "Email",
    value: "ailenaprendiendotec@gmail.com",
    href: "mailto:ailenaprendiendotec@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "hover:border-[#00B4D8]/40",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen text-base sm:text-lg">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#007BFF]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#00B4D8]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#007BFF] via-[#00B4D8] to-[#007BFF] p-[3px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#0A2342]">
                      <Image
                        src="/aileen-profile.png"
                        alt="Ailén Páez — Desarrolladora de Software"
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                  {/* Football decoration */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 glass rounded-full flex items-center justify-center text-2xl shadow-lg">
                    ⚽
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-center lg:text-left">
                <span className="text-xs text-[#00B4D8] uppercase tracking-widest font-semibold">
                  Sobre la autora
                </span>
                <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold text-white">
                  Ailén <span className="text-gradient">Páez</span>
                </h1>
                <p className="mt-4 text-[#00B4D8] font-medium">
                  Desarrolladora de Software
                </p>
                <p className="mt-4 text-white/65 leading-relaxed max-w-lg">
                  Desarrolladora de software apasionada por la tecnología, la nube, la automatización
                  y la creación de experiencias digitales que conectan a las personas con lo que más
                  les importa. CopaTracker nació de la pasión por el fútbol y la curiosidad por
                  resolver problemas reales con código limpio y diseño moderno.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Profile */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl p-8 md:p-10">
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Perfil <span className="text-gradient">profesional</span>
              </h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  Me especializo en el desarrollo de aplicaciones web modernas, con foco en la
                  experiencia de usuario, rendimiento y escalabilidad. Trabajo con el stack de
                  JavaScript moderno y me interesa especialmente la integración con servicios cloud
                  y la automatización de procesos.
                </p>
                <p>
                  CopaTracker 2026 fue construido con Next.js, TypeScript y Tailwind CSS, consumiendo
                  datos en tiempo real de la Football Data API. Cada decisión de diseño y arquitectura
                  apuntó a crear una plataforma robusta, rápida y visualmente impactante.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-white mb-8 text-center">
              <span className="text-gradient">Tecnologías</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {TECHS.map((tech) => (
                <div
                  key={tech.name}
                  className="glass px-5 py-3 rounded-xl flex items-center gap-3 hover:border-[#007BFF]/30 transition-all hover:-translate-y-0.5"
                >
                  <span className="text-2xl">{getTechEmoji(tech.name)}</span>
                  <span className="text-base font-medium text-white/80">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-white mb-8 text-center">
              <span className="text-gradient">Contacto</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold transition-all duration-200 hover:-translate-y-1 hover:bg-[#007BFF]/15 ${c.color}`}
                >
                  <span className="text-lg">{c.icon}</span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Back button */}
        <div className="pb-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#007BFF] hover:bg-[#0066DD] text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#007BFF]/30"
          >
            ← Volver a CopaTracker 2026
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
