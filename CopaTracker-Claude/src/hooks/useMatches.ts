"use client";
import { useState, useEffect, useCallback } from "react";
import { Match, FilterStatus, FilterStage } from "@/types";

interface UseMatchesReturn {
  matches: Match[];
  filteredMatches: Match[];
  loading: boolean;
  error: string | null;
  search: string;
  setSearch: (v: string) => void;
  statusFilter: FilterStatus;
  setStatusFilter: (v: FilterStatus) => void;
  stageFilter: FilterStage;
  setStageFilter: (v: FilterStage) => void;
  refresh: () => void;
  lastUpdated: Date | null;
}

export function useMatches(): UseMatchesReturn {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("ALL");
  const [stageFilter, setStageFilter] = useState<FilterStage>("ALL");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/matches");
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? `Error ${res.status}`);
      }
      const data = await res.json();
      setMatches(data.matches ?? []);
      setLastUpdated(new Date());
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchData]);

  const filteredMatches = matches.filter((m) => {
    const matchesSearch =
      search === "" ||
      m.homeTeam.name.toLowerCase().includes(search.toLowerCase()) ||
      m.awayTeam.name.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" ||
      (statusFilter === "IN_PLAY" && (m.status === "IN_PLAY" || m.status === "PAUSED")) ||
      (statusFilter === "SCHEDULED" && (m.status === "SCHEDULED" || m.status === "TIMED")) ||
      (statusFilter === "FINISHED" && m.status === "FINISHED");

    const matchesStage = stageFilter === "ALL" || m.stage === stageFilter;

    return matchesSearch && matchesStatus && matchesStage;
  });

  return {
    matches,
    filteredMatches,
    loading,
    error,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    stageFilter,
    setStageFilter,
    refresh: fetchData,
    lastUpdated,
  };
}
