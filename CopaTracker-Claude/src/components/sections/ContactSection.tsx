"use client";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs text-[#00B4D8] uppercase tracking-widest font-semibold">
            Contacto
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            ¿Tenés <span className="text-gradient">sugerencias?</span>
          </h2>
          <p className="mt-4 text-white/60 text-sm">
            Tu feedback ayuda a mejorar CopaTracker. Escribinos y te respondemos.
          </p>
        </div>

        {sent ? (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-white font-semibold text-xl mb-2">¡Mensaje enviado!</h3>
            <p className="text-white/60 text-sm">
              Gracias por escribirnos. Te responderemos a la brevedad.
            </p>
          </div>
        ) : (
          <div className="glass rounded-2xl p-8 flex flex-col gap-5">
            <div>
              <label className="block text-xs text-white/60 font-medium mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#007BFF]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-white/60 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#007BFF]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-white/60 font-medium mb-2">Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Escribí tu mensaje aquí..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#007BFF]/50 transition-colors resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!form.name || !form.email || !form.message}
              className="w-full py-4 bg-[#007BFF] hover:bg-[#0066DD] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-[#007BFF]/30"
            >
              Enviar mensaje
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
