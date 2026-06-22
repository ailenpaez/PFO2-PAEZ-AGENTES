const emojiLibrary: Record<string, string> = {
  javascript: "🟨",
  typescript: "🔷",
  react: "⚛️",
  nextjs: "▲",
  aws: "☁️",
  git: "🔀",
  github: "🐙",
};

export function getTechEmoji(name: string): string {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return emojiLibrary[key] || "✨";
}
