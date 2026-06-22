import Image from "next/image";
import { Match } from "@/types";
import { formatMatchDate, getStatusLabel, getStatusColor, getStageName } from "@/lib/api";

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const { date, time } = formatMatchDate(match.utcDate);
  const statusLabel = getStatusLabel(match.status);
  const statusColor = getStatusColor(match.status);
  const isLive = match.status === "IN_PLAY" || match.status === "PAUSED";
  const isFinished = match.status === "FINISHED";

  return (
    <div className="glass rounded-2xl p-5 hover:border-[#007BFF]/30 transition-all duration-300 hover:-translate-y-0.5 group">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-white/40 font-medium">{getStageName(match.stage)}</span>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColor} flex items-center gap-1`}>
          {isLive && <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />}
          {statusLabel}
        </span>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between gap-3">
        {/* Home */}
        <div className="flex flex-col items-center gap-2 flex-1 text-center">
          <div className="w-12 h-12 relative">
            {match.homeTeam.crest ? (
              <Image
                src={match.homeTeam.crest}
                alt={match.homeTeam.name}
                fill
                className="object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            ) : (
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-lg font-bold text-white/60">
                {match.homeTeam.tla || "?"}
              </div>
            )}
          </div>
          <span className="text-xs font-medium text-white/80 leading-tight">
            {match.homeTeam.shortName || match.homeTeam.name}
          </span>
        </div>

        {/* Score / Time */}
        <div className="flex flex-col items-center gap-1 min-w-[70px]">
          {isFinished || isLive ? (
            <div className="flex items-center gap-2">
              <span className={`text-3xl font-display font-bold ${isLive ? "text-green-400" : "text-white"}`}>
                {match.score.fullTime.home ?? 0}
              </span>
              <span className="text-white/30 font-light">–</span>
              <span className={`text-3xl font-display font-bold ${isLive ? "text-green-400" : "text-white"}`}>
                {match.score.fullTime.away ?? 0}
              </span>
            </div>
          ) : (
            <span className="text-2xl font-display font-bold text-[#00B4D8]">{time}</span>
          )}
          <span className="text-xs text-white/40">{date}</span>
        </div>

        {/* Away */}
        <div className="flex flex-col items-center gap-2 flex-1 text-center">
          <div className="w-12 h-12 relative">
            {match.awayTeam.crest ? (
              <Image
                src={match.awayTeam.crest}
                alt={match.awayTeam.name}
                fill
                className="object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            ) : (
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-lg font-bold text-white/60">
                {match.awayTeam.tla || "?"}
              </div>
            )}
          </div>
          <span className="text-xs font-medium text-white/80 leading-tight">
            {match.awayTeam.shortName || match.awayTeam.name}
          </span>
        </div>
      </div>
    </div>
  );
}
