"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  BracketMatchCard,
  BracketPlaceholder,
} from "@/components/ui/MatchCard";
import {
  ErrorState,
  LoadingState,
  SectionHeading,
} from "@/components/ui/Section";
import { KNOCKOUT_STAGES, REFRESH_INTERVAL_MS } from "@/lib/constants";
import { getKnockoutMatches, getUserFacingError } from "@/lib/format-match";
import type { ApiResponse, Match } from "@/types/match";

export function BracketSimulatorSection() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

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
    const interval = setInterval(() => void loadMatches(), REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [loadMatches]);

  const bracket = useMemo(() => {
    if (!data?.ok) return {} as Record<string, Match[]>;
    return KNOCKOUT_STAGES.reduce<Record<string, Match[]>>((acc, stage) => {
      acc[stage.key] = getKnockoutMatches(data.matches, stage.key);
      return acc;
    }, {});
  }, [data]);

  return (
    <section id="simulador" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simulador"
          title="Cruces eliminatorios hacia la final"
          description="Visualizá el cuadro de octavos, cuartos, semifinales y la gran final con datos reales del torneo."
        />

        {loading && <LoadingState message="Cargando cuadro eliminatorio..." />}

        {!loading && data && !data.ok && (
          <ErrorState
            message={getUserFacingError(data.code)}
            onRetry={() => {
              setLoading(true);
              void loadMatches();
            }}
          />
        )}

        {!loading && data?.ok && (
          <div className="grid gap-8 lg:grid-cols-4">
            {KNOCKOUT_STAGES.map((stage) => {
              const matches = bracket[stage.key] ?? [];

              return (
                <div key={stage.key} className="space-y-4">
                  <h3 className="text-center text-lg font-bold text-turquoise">
                    {stage.label}
                  </h3>
                  <div className="space-y-4">
                    {matches.length > 0 ? (
                      matches.map((match) => (
                        <BracketMatchCard key={match.id} match={match} />
                      ))
                    ) : (
                      <>
                        <BracketPlaceholder label={`Cruce ${stage.label} 1`} />
                        <BracketPlaceholder label={`Cruce ${stage.label} 2`} />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
