export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface Score {
  winner: "HOME_TEAM" | "AWAY_TEAM" | "DRAW" | null;
  duration: "REGULAR" | "EXTRA_TIME" | "PENALTY_SHOOTOUT";
  fullTime: { home: number | null; away: number | null };
  halfTime: { home: number | null; away: number | null };
}

export type MatchStatus =
  | "SCHEDULED"
  | "TIMED"
  | "IN_PLAY"
  | "PAUSED"
  | "FINISHED"
  | "POSTPONED"
  | "CANCELLED";

export interface Match {
  id: number;
  utcDate: string;
  status: MatchStatus;
  matchday: number | null;
  stage: string;
  group: string | null;
  lastUpdated: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  competition: { id: number; name: string; code: string };
}

export interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface MatchesResponse {
  count: number;
  matches: Match[];
}

export interface ApiError {
  message: string;
  errorCode?: number;
}

export type FilterStatus = "ALL" | "SCHEDULED" | "IN_PLAY" | "FINISHED";
export type FilterStage =
  | "ALL"
  | "GROUP_STAGE"
  | "ROUND_OF_16"
  | "QUARTER_FINALS"
  | "SEMI_FINALS"
  | "FINAL";
