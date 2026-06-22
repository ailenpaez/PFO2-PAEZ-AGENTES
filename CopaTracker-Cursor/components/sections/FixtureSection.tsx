"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { MatchCard } from "@/components/ui/MatchCard";
import {
  EmptyState,
  ErrorState,
  LoadingState,
  SectionHeading,
} from "@/components/ui/Section";
import { REFRESH_INTERVAL_MS } from "@/lib/constants";
import {
  filterMatches,
  getUpcomingMatches,
  getUserFacingError,
  sortMatchesByDate,
} from "@/lib/format-match";
import type { ApiResponse, Match, StatusFilter } from "@/types/match";

export function FixtureSection() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [ascending, setAscending] = useState(true);

  const loadMatches = useCallback(async () => {
    try {
      const response = await fetch("/api/matches");
      const json = (await response.json()) as ApiResponse;
      setData(json);
    } catch {
      setData({
        ok: false,
        code: "NETWORK",
        message: getUserFacingError("NETWORK"),
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadMatches();
    const interval = setInterval(() => {
      void loadMatches();
    }, REFRESH_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [loadMatches]);

  const matches = useMemo(() => {
    if (!data?.ok) return [] as Match[];
    return sortMatchesByDate(
      filterMatches(data.matches, query, statusFilter),
      ascending
    );
  }, [data, query, statusFilter, ascending]);

  const upcoming = useMemo(() => {
    if (!data?.ok) return [] as Match[];
    return getUpcomingMatches(data.matches, 3);
  }, [data]);

  return (
    <section id="fixture" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Fixture Mundial"
          title="Partidos del FIFA World Cup 2026"
          description="Datos en tiempo real desde Football Data API. Se actualiza automáticamente cada 5 minutos."
        />

        {data?.ok && upcoming.length > 0 && (
          <div className="mb-10 rounded-2xl border border-turquoise/30 bg-turquoise/10 p-6">
            <h3 className="mb-4 text-lg font-semibold text-turquoise">Próximos partidos</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {upcoming.map((match) => (
                <MatchCard key={`upcoming-${match.id}`} match={match} />
              ))}
            </div>
          </div>
        )}

        <div className="mb-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-[1fr_auto_auto]">
          <label className="block">
            <span className="mb-2 block text-sm text-white/70">Buscar equipos</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ej: Argentina, Brasil..."
              className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white placeholder:text-white/40 focus:border-electric focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-white/70">Estado</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
              className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white focus:border-electric focus:outline-none md:min-w-[180px]"
            >
              <option value="all">Todos</option>
              <option value="scheduled">Programado</option>
              <option value="live">En juego</option>
              <option value="finished">Finalizado</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-white/70">Orden</span>
            <select
              value={ascending ? "asc" : "desc"}
              onChange={(e) => setAscending(e.target.value === "asc")}
              className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white focus:border-electric focus:outline-none md:min-w-[180px]"
            >
              <option value="asc">Fecha ascendente</option>
              <option value="desc">Fecha descendente</option>
            </select>
          </label>
        </div>

        {loading && <LoadingState />}

        {!loading && data && !data.ok && (
          <ErrorState
            message={getUserFacingError(data.code)}
            onRetry={() => {
              setLoading(true);
              void loadMatches();
            }}
          />
        )}

        {!loading && data?.ok && matches.length === 0 && (
          <EmptyState message="No se encontraron partidos con los filtros seleccionados." />
        )}

        {!loading && data?.ok && matches.length > 0 && (
          <>
            <p className="mb-6 text-sm text-white/50">
              Mostrando {matches.length} partido{matches.length !== 1 ? "s" : ""}
              {data.competition ? ` · ${data.competition.name}` : ""}
            </p>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
