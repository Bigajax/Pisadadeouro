import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Cabeçalho editorial assimétrico: eyebrow + título grande à esquerda,
 * texto de apoio e ação à direita, sobre uma hairline.
 */
export default function SectionHeader({
  eyebrow,
  titulo,
  texto,
  acao,
  tone = "dark",
}: {
  eyebrow: string;
  titulo: ReactNode;
  texto?: string;
  acao?: { href: string; label: string };
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <div className={`mb-10 border-b pb-8 md:mb-12 ${dark ? "hairline" : "hairline-dark"}`}>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className={`eyebrow ${dark ? "text-gold" : "text-ink/60"}`}>{eyebrow}</p>
          <h2
            className={`mt-3 font-display text-3xl leading-[1.1] sm:text-4xl lg:text-[44px] ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {titulo}
          </h2>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-3 md:items-end md:text-right">
          {texto && (
            <p className={`max-w-xs text-sm leading-relaxed ${dark ? "text-mist/60" : "text-ink/55"}`}>{texto}</p>
          )}
          {acao && (
            <Link
              href={acao.href}
              className={`group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                dark ? "text-gold-light hover:text-gold" : "text-ink hover:text-gold"
              }`}
            >
              {acao.label}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
