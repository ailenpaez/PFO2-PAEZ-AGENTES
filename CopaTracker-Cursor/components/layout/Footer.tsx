import Link from "next/link";
import { AUTHOR, NAV_LINKS, SITE } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#07182d]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-white/70">{SITE.description}</p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-turquoise">
            Navegación rápida
          </h2>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-turquoise">
            Redes sociales
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href={AUTHOR.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/75 transition hover:text-white"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={AUTHOR.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/75 transition hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${AUTHOR.email}`}
                className="text-sm text-white/75 transition hover:text-white"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        <p>
          © {year} CopaTracker 2026. Todos los derechos reservados.{" "}
          <Link href="/about" className="text-turquoise hover:underline">
            Sobre la autora
          </Link>
        </p>
      </div>
    </footer>
  );
}
