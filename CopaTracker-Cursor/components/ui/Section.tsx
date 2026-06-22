import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div id={id} className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-turquoise">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-white/75 sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-sm transition hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow ${className}`}
    >
      {children}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-electric text-white hover:bg-electric/90 shadow-glow"
      : "border border-white/20 bg-white/5 text-white hover:border-turquoise hover:bg-white/10";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function LoadingState({ message = "Cargando partidos..." }: { message?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 py-16"
      role="status"
      aria-live="polite"
    >
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-electric" />
      <p className="text-white/70">{message}</p>
    </div>
  );
}

export function ErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) {
  return (
    <div
      className="rounded-2xl border border-vibrant/40 bg-vibrant/10 p-8 text-center"
      role="alert"
    >
      <p className="text-lg font-semibold text-white">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-xl bg-electric px-5 py-2 text-sm font-semibold text-white transition hover:bg-electric/90"
        >
          Reintentar
        </button>
      )}
    </div>
  );
}

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
      <p className="text-white/70">{message}</p>
    </div>
  );
}
