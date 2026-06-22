import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/#inicio"
      className={`group flex items-center gap-2 font-bold tracking-tight ${className}`}
      aria-label={`${SITE.name} - Inicio`}
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/20 text-xl shadow-glow transition group-hover:scale-105"
        aria-hidden="true"
      >
        ⚽
      </span>
      <span className="leading-tight">
        <span className="block text-sm text-white/80">CopaTracker</span>
        <span className="block text-lg text-gradient">2026</span>
      </span>
    </Link>
  );
}
