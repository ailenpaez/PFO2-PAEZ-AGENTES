import type { Metadata } from "next";
import { Inter, Teko } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "CopaTracker ⚽ 2026 | Seguí el Mundial en tiempo real",
  description:
    "Plataforma interactiva para seguir el Mundial FIFA 2026: fixture completo, resultados en tiempo real y simulación de cruces eliminatorios.",
  keywords: ["FIFA World Cup 2026", "Mundial 2026", "fixture", "resultados", "fútbol"],
  openGraph: {
    title: "CopaTracker ⚽ 2026",
    description: "Seguí el Mundial FIFA 2026 en tiempo real",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${teko.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
