const FEATURES = [
  {
    icon: "⚡",
    title: "Resultados en tiempo real",
    desc: "Datos actualizados automáticamente cada 5 minutos desde la API oficial de Football Data.",
    color: "from-[#007BFF]/20 to-[#007BFF]/5",
  },
  {
    icon: "📋",
    title: "Fixture completo",
    desc: "Todos los partidos del torneo con fecha, hora local, equipos, estado y resultado.",
    color: "from-[#00B4D8]/20 to-[#00B4D8]/5",
  },
  {
    icon: "🗂️",
    title: "Simulación de cruces",
    desc: "Visualizá el cuadro eliminatorio completo con todos los posibles cruces hasta la final.",
    color: "from-[#E63946]/20 to-[#E63946]/5",
  },
  {
    icon: "📊",
    title: "Posiciones actualizadas",
    desc: "Consultá las tablas y seguí la evolución de cada selección durante el torneo.",
    color: "from-[#007BFF]/20 to-[#00B4D8]/5",
  },
];

export default function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs text-[#00B4D8] uppercase tracking-widest font-semibold">
            Funcionalidades
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Todo lo que <span className="text-gradient">necesitás</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${f.color} border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden group`}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
