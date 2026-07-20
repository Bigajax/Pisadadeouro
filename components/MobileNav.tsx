"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, waLink } from "@/data/site";
import { WhatsIcon } from "@/components/Header";

/** Barra de navegação fixa no rodapé — apenas mobile. */
export default function MobileNav() {
  const pathname = usePathname();

  const itemClass = (ativo: boolean) =>
    `flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors ${
      ativo ? "text-gold-light" : "text-mist/55"
    }`;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 flex border-t border-white/10 bg-ink/95 backdrop-blur lg:hidden"
      aria-label="Navegação inferior"
    >
      <Link href="/" className={itemClass(pathname === "/")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
        </svg>
        Início
      </Link>
      <Link href="/catalogo" className={itemClass(pathname.startsWith("/catalogo") || pathname.startsWith("/produto"))}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden>
          <rect x="3" y="3" width="8" height="8" />
          <rect x="13" y="3" width="8" height="8" />
          <rect x="3" y="13" width="8" height="8" />
          <rect x="13" y="13" width="8" height="8" />
        </svg>
        Catálogo
      </Link>
      <Link href="/#loja" className={itemClass(false)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden>
          <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        Loja
      </Link>
      <a href={waLink(site.mensagens.geral)} target="_blank" rel="noopener noreferrer" className={itemClass(false)}>
        <WhatsIcon className="h-5 w-5" />
        WhatsApp
      </a>
    </nav>
  );
}
