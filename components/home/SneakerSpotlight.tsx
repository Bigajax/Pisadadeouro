"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { tenisDestaque } from "@/data/products";

const filtros = [
  { key: "todos", label: "Todos" },
  { key: "New Balance", label: "New Balance" },
  { key: "Adidas", label: "Adidas" },
  { key: "Nike", label: "Nike" },
  { key: "casual", label: "Casual" },
  { key: "esportivo", label: "Esportivo" },
  { key: "feminino", label: "Feminino" },
  { key: "masculino", label: "Masculino" },
];

export default function SneakerSpotlight() {
  const [ativo, setAtivo] = useState("todos");

  const lista = useMemo(() => {
    if (ativo === "todos") return tenisDestaque;
    return tenisDestaque.filter(
      (p) =>
        p.marca === ativo ||
        p.estilo === ativo ||
        p.genero === ativo ||
        (ativo === "feminino" && p.genero === "unissex") ||
        (ativo === "masculino" && p.genero === "unissex")
    );
  }, [ativo]);

  return (
    <section className="bg-ink py-20 md:py-28" id="tenis">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Tênis em destaque</p>
            <h2 className="mt-3 font-display text-3xl leading-[1.1] text-white sm:text-4xl lg:text-[44px]">
              Uma nova pisada muda <span className="italic text-gold-light">o look inteiro.</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-mist/60">
              Dos modelos clássicos aos lançamentos mais desejados, encontre o tênis que combina com o seu estilo.
            </p>
          </div>
          <Link
            href="/catalogo?categoria=tenis"
            className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-gold-light transition-colors hover:text-gold"
          >
            Ver todos os tênis
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden>
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* filtros */}
        <div className="rail -mx-5 mb-8 flex gap-2 overflow-x-auto border-b hairline px-5 pb-4 md:-mx-10 md:px-10">
          {filtros.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setAtivo(f.key)}
              aria-pressed={ativo === f.key}
              className={`flex-none whitespace-nowrap px-4 py-2 text-[12px] font-bold uppercase tracking-wider transition-colors ${
                ativo === f.key
                  ? "bg-gold text-ink"
                  : "border border-white/15 text-mist/60 hover:border-gold/50 hover:text-gold-light"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
          {lista.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {lista.length === 0 && (
          <p className="py-12 text-center text-sm text-mist/50">
            Nenhum modelo com esse filtro por aqui — consulte a loja pelo WhatsApp.
          </p>
        )}
      </div>
    </section>
  );
}
