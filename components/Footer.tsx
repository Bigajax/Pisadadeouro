import Link from "next/link";
import TreadDivider from "@/components/TreadDivider";
import { site, waLink } from "@/data/site";

const colunas: { titulo: string; links: { label: string; href: string; externo?: boolean }[] }[] = [
  {
    titulo: "Catálogo",
    links: [
      { label: "Tênis", href: "/catalogo?categoria=tenis" },
      { label: "Feminino", href: "/catalogo?genero=feminino" },
      { label: "Masculino", href: "/catalogo?genero=masculino" },
      { label: "Bolsas", href: "/catalogo?categoria=bolsas" },
      { label: "Chinelos", href: "/catalogo?categoria=chinelos" },
      { label: "Acessórios", href: "/catalogo?categoria=acessorios" },
    ],
  },
  {
    titulo: "A loja",
    links: [
      { label: "Sobre", href: "/#sobre" },
      { label: "Como comprar", href: "/#como-comprar" },
      { label: "Loja física", href: "/#loja" },
      { label: "Perguntas frequentes", href: "/#faq" },
    ],
  },
  {
    titulo: "Contato",
    links: [
      { label: "WhatsApp", href: waLink(site.mensagens.geral), externo: true },
      { label: "Instagram", href: site.instagram, externo: true },
      { label: "Como chegar", href: site.mapsUrl, externo: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-graphite">
      <TreadDivider className="opacity-40" />
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-lettering.png" alt="Pisada de Ouro" className="h-14 w-auto" loading="lazy" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist/55">
              Tênis premium, moda feminina, masculina e acessórios em Maringá — com envio para todo o Brasil e
              atendimento próximo pelo WhatsApp.
            </p>
            <address className="mt-6 text-xs not-italic leading-relaxed text-mist/45">
              {site.endereco}
              <br />
              {site.horarios.map((h) => `${h.dias}: ${h.horas}`).join(" · ")}
            </address>
          </div>

          {colunas.map((c) => (
            <nav key={c.titulo} aria-label={c.titulo}>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">{c.titulo}</p>
              <ul className="mt-5 space-y-2.5">
                {c.links.map((l) =>
                  l.externo ? (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-mist/60 transition-colors hover:text-gold-light"
                      >
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-mist/60 transition-colors hover:text-gold-light">
                        {l.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center">
          <p className="text-xs text-mist/40">Pisada de Ouro — Maringá, Paraná.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-mist/40">
            {/* Crie as páginas de política com os textos oficiais da loja */}
            <span className="cursor-default">Política de privacidade</span>
            <span className="cursor-default">Política de troca</span>
            <span className="cursor-default">Termos de uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
