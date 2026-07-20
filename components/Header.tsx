"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site, waLink } from "@/data/site";

const links = [
  { href: "/", label: "Início" },
  { href: "/catalogo?ordem=lancamento", label: "Novidades" },
  { href: "/catalogo?categoria=tenis", label: "Tênis" },
  { href: "/catalogo?genero=feminino", label: "Feminino" },
  { href: "/catalogo?genero=masculino", label: "Masculino" },
  { href: "/catalogo?categoria=acessorios", label: "Acessórios" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#loja", label: "Contato" },
];

export function WhatsIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.24-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-white/10 bg-ink/95 backdrop-blur"
          : "border-white/5 bg-ink lg:border-transparent lg:bg-gradient-to-b lg:from-ink/90 lg:to-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 md:h-[72px] max-w-[1400px] items-center justify-between gap-4 px-5 md:px-10">
        <Link href="/" aria-label="Pisada de Ouro — início" onClick={() => setOpen(false)} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-lettering.png"
            alt="Pisada de Ouro"
            className="h-8 md:h-11 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[13px] font-semibold tracking-wide text-mist/80 transition-colors hover:text-gold-light"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/catalogo"
            aria-label="Buscar no catálogo"
            className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-mist/80 transition-colors hover:border-gold hover:text-gold"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </Link>
          <a
            href={waLink(site.mensagens.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13px] font-bold text-ink transition-colors hover:bg-gold-light"
          >
            <WhatsIcon />
            Comprar pelo WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist md:h-10 md:w-10"
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden>
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden>
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* menu mobile em tela cheia */}
      {open && (
        <div className="lg:hidden absolute inset-x-0 top-full z-40 flex h-[calc(100svh-3.5rem)] md:h-[calc(100svh-4.5rem)] flex-col bg-ink px-6 pb-8 pt-6 overflow-y-auto">
          <nav className="flex flex-col" aria-label="Menu móvel">
            {links.map((l, i) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b hairline-soft py-4 text-xl font-semibold text-mist transition-colors hover:text-gold-light"
              >
                {l.label}
                <span className="font-display text-sm italic text-gold/60">{String(i + 1).padStart(2, "0")}</span>
              </Link>
            ))}
          </nav>
          <a
            href={waLink(site.mensagens.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-ink"
          >
            <WhatsIcon />
            Comprar pelo WhatsApp
          </a>
          <p className="mt-6 text-center text-xs text-mist/50">{site.enderecoCurto}</p>
        </div>
      )}
    </header>
  );
}
