const TESTIMONIALS = [
  {
    name: "Santiago Moreno",
    role: "Hincha de Argentina 🇦🇷",
    comment:
      "CopaTracker es lo que esperaba para el Mundial. Entro a revisar el fixture y me quedo horas mirando los cruces. ¡La visualización de eliminatorias es increíble!",
    avatar: "SM",
  },
  {
    name: "Valentina Cruz",
    role: "Fútbolera profesional 🇧🇷",
    comment:
      "Uso la app desde el celular y funciona perfectísimo. Los resultados se actualizan solos y el diseño es muy limpio. La recomendé a todos mis amigos.",
    avatar: "VC",
  },
  {
    name: "Marcos Tejada",
    role: "Periodista deportivo 🇲🇽",
    comment:
      "Una herramienta imprescindible para seguir el Mundial. Los datos son confiables y la interfaz es tan buena que la uso hasta para mostrar partidos en el canal.",
    avatar: "MT",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs text-[#00B4D8] uppercase tracking-widest font-semibold">
            Lo que dicen los hinchas
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            La voz de la <span className="text-gradient">tribuna</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 hover:border-[#007BFF]/20 transition-all">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007BFF] to-[#00B4D8] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
