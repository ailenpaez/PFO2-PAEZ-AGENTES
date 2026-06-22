import { FootballApiError } from "./errors";
import { WORLD_CUP_SEASON } from "./constants";
import type { Competition, MatchesResponse } from "@/types/match";

const BASE_URL = "https://api.football-data.org/v4";

function getAuthHeaders(): HeadersInit {
  const key = process.env.FOOTBALL_DATA_API_KEY;
  if (!key) {
    throw new FootballApiError("API key no configurada", "MISSING_KEY");
  }

  return {
    "X-Auth-Token": key,
  };
}

async function parseFootballResponse<T>(response: Response): Promise<T> {
  if (response.status === 401 || response.status === 403) {
    throw new FootballApiError("API Key inválida o sin acceso", "INVALID_KEY", response.status);
  }

  if (response.status === 429) {
    throw new FootballApiError("Rate limit excedido", "RATE_LIMIT", 429);
  }

  if (response.status === 404) {
    throw new FootballApiError("Recurso no encontrado", "NOT_FOUND", 404);
  }

  if (!response.ok) {
    throw new FootballApiError("Error del servidor", "UNKNOWN", response.status);
  }

  return response.json() as Promise<T>;
}

export async function resolveWorldCupCompetition(): Promise<Competition> {
  const response = await fetch(`${BASE_URL}/competitions/WC`, {
    headers: getAuthHeaders(),
    next: { revalidate: 300 },
  });

  const data = await parseFootballResponse<Competition>(response);

  if (!data?.code) {
    throw new FootballApiError("Competición no encontrada", "NOT_FOUND");
  }

  return data;
}

export async function fetchWorldCupMatches(): Promise<{
  matches: MatchesResponse["matches"];
  competition: Competition | null;
}> {
  await resolveWorldCupCompetition();

  const response = await fetch(
    `${BASE_URL}/competitions/WC/matches?season=${WORLD_CUP_SEASON}`,
    {
      headers: getAuthHeaders(),
      next: { revalidate: 300 },
    }
  );

  const data = await parseFootballResponse<MatchesResponse>(response);
  const matches = data.matches ?? [];

  if (matches.length === 0) {
    throw new FootballApiError("No hay partidos disponibles", "EMPTY");
  }

  return {
    matches,
    competition: data.competition ?? null,
  };
}

export async function safeFetchWorldCupMatches() {
  try {
    const { matches, competition } = await fetchWorldCupMatches();

    return {
      ok: true as const,
      matches,
      competition,
      fetchedAt: new Date().toISOString(),
    };
  } catch (error) {
    if (error instanceof FootballApiError) {
      return {
        ok: false as const,
        code: error.code,
        message: error.message,
        status: error.status,
      };
    }

    return {
      ok: false as const,
      code: "NETWORK" as const,
      message: "Error de red al consultar la API",
    };
  }
}
