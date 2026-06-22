import Image from "next/image";
import type { Match } from "@/types/match";
import {
  formatMatchDate,
  formatMatchTime,
  formatScore,
  getDisplayStatus,
  isLiveStatus,
} from "@/lib/format-match";

export function StatusBadge({ status }: { status: Match["status"] }) {
  const label = getDisplayStatus(status);
  const live = isLiveStatus(status);

  const styles = live
    ? "bg-vibrant/20 text-vibrant border-vibrant/40 animate-pulseLive"
    : status === "FINISHED"
      ? "bg-white/10 text-white/80 border-white/20"
      : "bg-electric/20 text-electric border-electric/30";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles}`}
    >
      {live && (
        <span className="mr-2 h-2 w-2 rounded-full bg-vibrant" aria-hidden="true" />
      )}
      {label}
    </span>
  );
}

export function MatchCard({ match }: { match: Match }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-card transition hover:border-electric/30 hover:shadow-glow">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-white/65">
          <time dateTime={match.utcDate}>
            {formatMatchDate(match.utcDate)} · {formatMatchTime(match.utcDate)}
          </time>
        </div>
        <StatusBadge status={match.status} />
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <TeamBlock team={match.homeTeam} align="right" />
        <div className="text-center">
          <p className="text-2xl font-bold tracking-wider">{formatScore(match)}</p>
          {match.competition && (
            <p className="mt-1 text-xs text-white/50">{match.competition.name}</p>
          )}
        </div>
        <TeamBlock team={match.awayTeam} align="left" />
      </div>

      {match.stage && match.stage !== "GROUP_STAGE" && (
        <p className="mt-4 text-center text-xs uppercase tracking-wider text-turquoise">
          {match.stage.replaceAll("_", " ")}
        </p>
      )}
    </article>
  );
}

function TeamBlock({
  team,
  align,
}: {
  team: Match["homeTeam"];
  align: "left" | "right";
}) {
  return (
    <div
      className={`flex items-center gap-3 ${align === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      {team.crest ? (
        <Image
          src={team.crest}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs">
          {team.tla}
        </div>
      )}
      <div>
        <p className="font-semibold">{team.shortName || team.name}</p>
        <p className="text-xs text-white/50">{team.tla}</p>
      </div>
    </div>
  );
}

export function BracketMatchCard({ match }: { match: Match }) {
  return (
    <div className="rounded-xl border border-white/10 bg-navy/80 p-4 text-sm shadow-card">
      <div className="mb-3 flex items-center justify-between gap-2">
        <StatusBadge status={match.status} />
        <span className="text-xs text-white/50">{formatMatchTime(match.utcDate)}</span>
      </div>
      <div className="space-y-2">
        <TeamRow team={match.homeTeam} score={match.score.fullTime.home} />
        <TeamRow team={match.awayTeam} score={match.score.fullTime.away} />
      </div>
    </div>
  );
}

function TeamRow({
  team,
  score,
}: {
  team: Match["homeTeam"];
  score: number | null;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        {team.crest && (
          <Image
            src={team.crest}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        )}
        <span className="font-medium">{team.shortName || team.name}</span>
      </div>
      <span className="font-bold">{score ?? "-"}</span>
    </div>
  );
}

export function BracketPlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-dashed border-white/15 bg-white/5 p-4 text-center text-sm text-white/45">
      {label}
      <p className="mt-1 text-xs">Por definir</p>
    </div>
  );
}
