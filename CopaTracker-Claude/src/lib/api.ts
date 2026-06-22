import { Match, MatchesResponse } from "@/types";

const BASE_URL = "https://api.football-data.org/v4";
const WC_2026_ID = 2000; // FIFA World Cup competition id

function getHeaders(): HeadersInit {
  const key = process.env.FOOTBALL_DATA_API_KEY;
  if (!key) throw new Error("FOOTBALL_DATA_API_KEY is not configured.");
  return { "X-Auth-Token": key };
}

export async function fetchMatches(): Promise<MatchesResponse> {
  const res = await fetch(`${BASE_URL}/competitions/${WC_2026_ID}/matches`, {
    headers: getHeaders(),
    next: { revalidate: 300 }, // 5 min cache
  });

  if (res.status === 401) throw new Error("API Key inválida o sin permisos.");
  if (res.status === 429) throw new Error("Límite de solicitudes excedido. Intentá en unos minutos.");
  if (!res.ok) throw new Error(`Error de API: ${res.status} ${res.statusText}`);

  const data = await res.json();
  return data as MatchesResponse;
}

export async function fetchUpcomingMatches(): Promise<Match[]> {
  const data = await fetchMatches();
  const now = new Date();
  return data.matches
    .filter((m) => new Date(m.utcDate) > now && m.status === "SCHEDULED")
    .sort((a, b) => new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime())
    .slice(0, 6);
}

export function formatMatchDate(utcDate: string): { date: string; time: string } {
  const d = new Date(utcDate);
  return {
    date: d.toLocaleDateString("es-AR", { weekday: "short", day: "numeric", month: "short" }),
    time: d.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }),
  };
}

export function getStatusLabel(status: string): string {
  const map: Record<string, string> = {
    SCHEDULED: "Programado",
    TIMED: "Programado",
    IN_PLAY: "En juego",
    PAUSED: "Entretiempo",
    FINISHED: "Finalizado",
    POSTPONED: "Postergado",
    CANCELLED: "Cancelado",
  };
  return map[status] ?? status;
}

export function getStatusColor(status: string): string {
  if (status === "IN_PLAY" || status === "PAUSED") return "text-green-400 bg-green-400/10";
  if (status === "FINISHED") return "text-gray-400 bg-gray-400/10";
  return "text-[#00B4D8] bg-[#00B4D8]/10";
}

export function getStageName(stage: string): string {
  const map: Record<string, string> = {
    GROUP_STAGE: "Fase de Grupos",
    ROUND_OF_16: "Octavos de Final",
    QUARTER_FINALS: "Cuartos de Final",
    SEMI_FINALS: "Semifinales",
    THIRD_PLACE: "Tercer Puesto",
    FINAL: "Final",
  };
  return map[stage] ?? stage;
}
