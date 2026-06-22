import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E63946]/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(0,180,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[#00B4D8] font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          FIFA World Cup 2026 · USA · Canada · México
        </div>

        {/* Title */}
        <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl font-extrabold text-white mb-6 animate-slide-up tracking-tight">
          Copa<span className="text-gradient">Tracker</span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl text-[#00B4D8] mt-2">⚽ 2026</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/70 mb-12 leading-relaxed animate-slide-up">
          Seguí el Mundial FIFA 2026 en tiempo real con fixture actualizado,
          resultados en vivo y simulación de cruces hacia la gran final.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <Link
            href="/#fixture"
            className="px-8 py-4 bg-[#007BFF] hover:bg-[#0066DD] text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#007BFF]/30 glow-blue"
          >
            Ver Fixture
          </Link>
          <Link
            href="/#simulador"
            className="px-8 py-4 glass text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:border-[#00B4D8]/40 hover:text-[#00B4D8]"
          >
            Explorar Cruces →
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "48", label: "Equipos" },
            { value: "104", label: "Partidos" },
            { value: "3", label: "Sedes" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4">
              <div className="text-3xl font-display font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-pulse-slow">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
