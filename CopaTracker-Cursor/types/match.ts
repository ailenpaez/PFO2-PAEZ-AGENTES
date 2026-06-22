import type { ApiErrorCode } from "@/lib/errors";

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface Score {
  winner: string | null;
  fullTime: { home: number | null; away: number | null };
  halfTime?: { home: number | null; away: number | null };
}

export type MatchStatus =
  | "SCHEDULED"
  | "TIMED"
  | "IN_PLAY"
  | "PAUSED"
  | "FINISHED"
  | "SUSPENDED"
  | "POSTPONED"
  | "CANCELLED"
  | "AWARDED";

export type MatchStage =
  | "FINAL"
  | "THIRD_PLACE"
  | "SEMI_FINALS"
  | "QUARTER_FINALS"
  | "LAST_16"
  | "LAST_32"
  | "GROUP_STAGE"
  | string;

export interface Match {
  id: number;
  utcDate: string;
  status: MatchStatus;
  stage: MatchStage;
  group: string | null;
  matchday: number | null;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  competition?: {
    id: number;
    name: string;
    code: string;
    emblem?: string;
  };
}

export interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem?: string;
}

export interface MatchesResponse {
  filters?: Record<string, string>;
  resultSet?: {
    count: number;
    first?: string;
    last?: string;
    played?: number;
  };
  competition?: Competition;
  matches: Match[];
}

export interface ApiSuccessResponse {
  ok: true;
  matches: Match[];
  competition: Competition | null;
  fetchedAt: string;
}

export interface ApiErrorResponse {
  ok: false;
  code: ApiErrorCode;
  message: string;
  status?: number;
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

export type StatusFilter = "all" | "scheduled" | "live" | "finished";

export type DisplayStatus = "Programado" | "En juego" | "Finalizado" | string;
