"use client";
import { useMatches } from "@/hooks/useMatches";
import MatchCard from "@/components/ui/MatchCard";
import { FilterStatus, FilterStage } from "@/types";

const STATUS_FILTERS: { label: string; value: FilterStatus }[] = [
  { label: "Todos", value: "ALL" },
  { label: "En juego", value: "IN_PLAY" },
  { label: "Programados", value: "SCHEDULED" },
  { label: "Finalizados", value: "FINISHED" },
];

const STAGE_FILTERS: { label: string; value: FilterStage }[] = [
  { label: "Todos", value: "ALL" },
  { label: "Grupos", value: "GROUP_STAGE" },
  { label: "Octavos", value: "ROUND_OF_16" },
  { label: "Cuartos", value: "QUARTER_FINALS" },
  { label: "Semis", value: "SEMI_FINALS" },
  { label: "Final", value: "FINAL" },
];

export default function FixtureSection() {
  const {
    filteredMatches,
    loading,
    error,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    stageFilter,
    setStageFilter,
    refresh,
    lastUpdated,
  } = useMatches();

  return (
    <section id="fixture" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs text-[#00B4D8] uppercase tracking-widest font-semibold">
              Fixture
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-white">
              Todos los <span className="text-gradient">partidos</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {lastUpdated && (
              <span className="text-xs text-white/40">
                Actualizado {lastUpdated.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })}
              </span>
            )}
            <button
              onClick={refresh}
              disabled={loading}
              className="glass px-4 py-2 rounded-xl text-sm text-white/70 hover:text-white transition-all disabled:opacity-50 flex items-center gap-2"
            >
              <svg className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Actualizar
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="glass rounded-2xl p-4 mb-8 flex flex-col gap-4">
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar equipo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#007BFF]/50 transition-colors"
            />
          </div>

          {/* Status filters */}
          <div className="flex flex-wrap gap-2">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setStatusFilter(f.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  statusFilter === f.value
                    ? "bg-[#007BFF] text-white"
                    : "glass text-white/60 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
            <div className="w-px bg-white/10 mx-2 hidden sm:block" />
            {STAGE_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setStageFilter(f.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  stageFilter === f.value
                    ? "bg-[#00B4D8]/20 border border-[#00B4D8]/40 text-[#00B4D8]"
                    : "glass text-white/60 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="glass rounded-2xl p-5 animate-pulse">
                <div className="flex justify-between mb-4">
                  <div className="h-3 w-24 bg-white/10 rounded" />
                  <div className="h-3 w-16 bg-white/10 rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/10 rounded-full" />
                    <div className="h-3 w-14 bg-white/10 rounded" />
                  </div>
                  <div className="h-8 w-16 bg-white/10 rounded" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/10 rounded-full" />
                    <div className="h-3 w-14 bg-white/10 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="glass rounded-2xl p-8 text-center border border-[#E63946]/20">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-white font-semibold mb-2">No se pudieron cargar los partidos</h3>
            <p className="text-white/50 text-sm mb-4">{error}</p>
            <button
              onClick={refresh}
              className="px-6 py-2 bg-[#007BFF] rounded-xl text-sm font-medium text-white hover:bg-[#0066DD] transition-colors"
            >
              Reintentar
            </button>
          </div>
        )}

        {!loading && !error && filteredMatches.length === 0 && (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-5xl mb-4">⚽</div>
            <h3 className="text-white font-semibold mb-2">Sin resultados</h3>
            <p className="text-white/50 text-sm">
              No hay partidos con los filtros seleccionados. Probá con otra búsqueda.
            </p>
          </div>
        )}

        {!loading && !error && filteredMatches.length > 0 && (
          <>
            <p className="text-xs text-white/40 mb-4">
              {filteredMatches.length} partido{filteredMatches.length !== 1 ? "s" : ""}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
