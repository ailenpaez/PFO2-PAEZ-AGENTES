const FEATURES = [
  {
    icon: "📅",
    title: "Fixture completo",
    desc: "Consultá todos los partidos del Mundial FIFA 2026, desde la fase de grupos hasta la gran final.",
  },
  {
    icon: "⚡",
    title: "Resultados en tiempo real",
    desc: "Seguí los goles y resultados actualizados automáticamente cada 5 minutos vía Football Data API.",
  },
  {
    icon: "🏆",
    title: "Cruces eliminatorios",
    desc: "Visualizá el cuadro completo de eliminatorias: octavos, cuartos, semis y final.",
  },
  {
    icon: "🌎",
    title: "Camino a la final",
    desc: "Explorá cómo cada selección avanza en el torneo y quién puede alzar la copa el 19 de julio.",
  },
];

export default function AboutProject() {
  return (
    <section id="sobre" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs text-[#00B4D8] uppercase tracking-widest font-semibold">
            ¿Qué es CopaTracker?
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Todo el Mundial,{" "}
            <span className="text-gradient">en un solo lugar</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Una plataforma moderna que conecta con datos reales para que no te pierdas ningún
            partido del Mundial FIFA 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-6 hover:border-[#007BFF]/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-[#00B4D8] transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
