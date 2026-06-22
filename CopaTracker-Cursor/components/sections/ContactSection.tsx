"use client";

import { FormEvent, useState } from "react";
import { Card, SectionHeading } from "@/components/ui/Section";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Escribinos"
          description="Este formulario es visual. No se envía información a ningún backend."
        />

        <Card>
          {submitted ? (
            <div className="py-8 text-center" role="status">
              <p className="text-lg font-semibold text-turquoise">
                ¡Gracias por tu mensaje!
              </p>
              <p className="mt-2 text-white/70">
                Esta demo no incluye backend, pero el formulario fue validado correctamente.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm text-white/70">Nombre</span>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white focus:border-electric focus:outline-none"
                  placeholder="Tu nombre"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-white/70">Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white focus:border-electric focus:outline-none"
                  placeholder="tu@email.com"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-white/70">Mensaje</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white focus:border-electric focus:outline-none"
                  placeholder="Contanos qué te gustaría ver en CopaTracker..."
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-electric px-6 py-3 font-semibold text-white transition hover:bg-electric/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:w-auto"
              >
                Enviar
              </button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
