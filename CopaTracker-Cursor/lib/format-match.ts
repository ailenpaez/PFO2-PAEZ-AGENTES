import type { ApiErrorCode } from "@/lib/errors";
import { getErrorMessage } from "@/lib/errors";
import type { DisplayStatus, Match, MatchStatus, StatusFilter } from "@/types/match";

export function formatMatchDate(utcDate: string): string {
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(utcDate));
}

export function formatMatchTime(utcDate: string): string {
  return new Intl.DateTimeFormat("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(utcDate));
}

export function getDisplayStatus(status: MatchStatus): DisplayStatus {
  if (status === "IN_PLAY" || status === "PAUSED") return "En juego";
  if (status === "FINISHED") return "Finalizado";
  if (status === "SCHEDULED" || status === "TIMED") return "Programado";
  return status;
}

export function isLiveStatus(status: MatchStatus): boolean {
  return status === "IN_PLAY" || status === "PAUSED";
}

export function isScheduledStatus(status: MatchStatus): boolean {
  return status === "SCHEDULED" || status === "TIMED";
}

export function formatScore(match: Match): string {
  const home = match.score.fullTime.home;
  const away = match.score.fullTime.away;

  if (home === null || away === null) return "- : -";
  return `${home} : ${away}`;
}

export function filterMatches(
  matches: Match[],
  query: string,
  statusFilter: StatusFilter
): Match[] {
  const normalizedQuery = query.trim().toLowerCase();

  return matches.filter((match) => {
    const matchesQuery =
      !normalizedQuery ||
      match.homeTeam.name.toLowerCase().includes(normalizedQuery) ||
      match.awayTeam.name.toLowerCase().includes(normalizedQuery) ||
      match.homeTeam.tla.toLowerCase().includes(normalizedQuery) ||
      match.awayTeam.tla.toLowerCase().includes(normalizedQuery);

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "live" && isLiveStatus(match.status)) ||
      (statusFilter === "scheduled" && isScheduledStatus(match.status)) ||
      (statusFilter === "finished" && match.status === "FINISHED");

    return matchesQuery && matchesStatus;
  });
}

export function sortMatchesByDate(matches: Match[], ascending = true): Match[] {
  return [...matches].sort((a, b) => {
    const diff = new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime();
    return ascending ? diff : -diff;
  });
}

export function getUpcomingMatches(matches: Match[], limit = 5): Match[] {
  return sortMatchesByDate(
    matches.filter((m) => isScheduledStatus(m.status) || isLiveStatus(m.status))
  ).slice(0, limit);
}

export function getKnockoutMatches(matches: Match[], stage: string): Match[] {
  return sortMatchesByDate(matches.filter((m) => m.stage === stage));
}

export function getUserFacingError(code: ApiErrorCode): string {
  return getErrorMessage(code);
}
