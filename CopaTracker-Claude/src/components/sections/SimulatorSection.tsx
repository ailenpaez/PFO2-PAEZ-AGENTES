const BRACKET = [
  {
    round: "Octavos de Final",
    matches: [
      { home: "1° Grupo A", away: "2° Grupo B" },
      { home: "1° Grupo C", away: "2° Grupo D" },
      { home: "1° Grupo E", away: "2° Grupo F" },
      { home: "1° Grupo G", away: "2° Grupo H" },
      { home: "1° Grupo B", away: "2° Grupo A" },
      { home: "1° Grupo D", away: "2° Grupo C" },
      { home: "1° Grupo F", away: "2° Grupo E" },
      { home: "1° Grupo H", away: "2° Grupo G" },
    ],
  },
  {
    round: "Cuartos de Final",
    matches: [
      { home: "Ganador O1", away: "Ganador O2" },
      { home: "Ganador O3", away: "Ganador O4" },
      { home: "Ganador O5", away: "Ganador O6" },
      { home: "Ganador O7", away: "Ganador O8" },
    ],
  },
  {
    round: "Semifinales",
    matches: [
      { home: "Ganador C1", away: "Ganador C2" },
      { home: "Ganador C3", away: "Ganador C4" },
    ],
  },
  {
    round: "Gran Final",
    matches: [{ home: "Ganador SF1", away: "Ganador SF2" }],
  },
];

function BracketMatch({ home, away }: { home: string; away: string }) {
  return (
    <div className="glass rounded-xl overflow-hidden text-xs w-44">
      <div className="px-3 py-2.5 border-b border-white/10 text-white/70 hover:bg-white/5 transition-colors flex justify-between">
        <span className="truncate">{home}</span>
        <span className="text-white/30 ml-2">–</span>
      </div>
      <div className="px-3 py-2.5 text-white/70 hover:bg-white/5 transition-colors flex justify-between">
        <span className="truncate">{away}</span>
        <span className="text-white/30 ml-2">–</span>
      </div>
    </div>
  );
}

export default function SimulatorSection() {
  return (
    <section id="simulador" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs text-[#00B4D8] uppercase tracking-widest font-semibold">
            Eliminatorias
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Cuadro de <span className="text-gradient">cruces</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm">
            Visualización del recorrido eliminatorio hasta la Gran Final del 19 de julio de 2026.
            Los cruces se actualizan con los resultados reales.
          </p>
        </div>

        {/* Bracket — horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-8 items-start min-w-max">
            {BRACKET.map((round, ri) => (
              <div key={round.round} className="flex flex-col gap-4">
                {/* Round label */}
                <div className="text-center mb-2">
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
                      ri === BRACKET.length - 1
                        ? "bg-[#E63946]/20 text-[#E63946]"
                        : "glass text-[#00B4D8]"
                    }`}
                  >
                    {round.round}
                  </span>
                </div>

                {/* Matches with spacing to visually align with next round */}
                <div
                  className="flex flex-col"
                  style={{ gap: `${Math.pow(2, ri) * 0.75}rem` }}
                >
                  {round.matches.map((match, mi) => (
                    <div key={mi} className="relative flex items-center gap-2">
                      <BracketMatch home={match.home} away={match.away} />
                      {ri < BRACKET.length - 1 && (
                        <svg
                          className="text-white/20 flex-shrink-0"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Trophy */}
            <div className="flex flex-col items-center justify-center self-center gap-3 pl-4">
              <div className="glass w-20 h-20 rounded-full flex items-center justify-center text-4xl glow-turquoise border border-[#00B4D8]/20">
                🏆
              </div>
              <span className="text-xs text-[#00B4D8] font-semibold uppercase tracking-widest text-center">
                Campeón
                <br />
                2026
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-white/30">
          Deslizá horizontalmente para ver el cuadro completo
        </p>
      </div>
    </section>
  );
}
