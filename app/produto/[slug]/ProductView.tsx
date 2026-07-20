"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPreco, type Product } from "@/data/products";
import { site, waLink } from "@/data/site";
import { WhatsIcon } from "@/components/Header";

const dispLabel: Record<Product["disponibilidade"], { label: string; cor: string }> = {
  disponivel: { label: "Disponível", cor: "text-emerald-400" },
  consulte: { label: "Consulte tamanhos", cor: "text-gold-light" },
  "ultimas-unidades": { label: "Últimas unidades", cor: "text-orange-400" },
};

const categoriaLabel: Record<string, string> = {
  tenis: "Tênis",
  feminino: "Feminino",
  masculino: "Masculino",
  bolsas: "Bolsas",
  chinelos: "Chinelos",
  acessorios: "Acessórios",
};

export default function ProductView({ product }: { product: Product }) {
  const [foto, setFoto] = useState(0);
  const [tamanho, setTamanho] = useState<string | undefined>();
  const [cor, setCor] = useState<string | undefined>(product.cores.length === 1 ? product.cores[0] : undefined);
  const [zoom, setZoom] = useState(false);

  const disp = dispLabel[product.disponibilidade];
  const msg = site.mensagens.produtoTamanho(product.nome, tamanho, cor);

  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10">
      {/* trilha de navegação */}
      <nav className="flex flex-wrap items-center gap-2 pb-6 text-[11px] font-semibold uppercase tracking-wider text-mist/40" aria-label="Você está em">
        <Link href="/" className="transition-colors hover:text-gold-light">
          Início
        </Link>
        <span aria-hidden>/</span>
        <Link href={`/catalogo?categoria=${product.categoria}`} className="transition-colors hover:text-gold-light">
          {categoriaLabel[product.categoria]}
        </Link>
        <span aria-hidden>/</span>
        <span className="text-mist/70">{product.nome}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        {/* galeria */}
        <div>
          <button
            type="button"
            onClick={() => setZoom(true)}
            className="img-zoom relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden border border-white/10"
            aria-label="Ampliar foto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.imagens[foto]}
              alt={`${product.nome} — foto ${foto + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-mist/80">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
              </svg>
            </span>
          </button>

          {product.imagens.length > 1 && (
            <div className="mt-3 flex gap-3">
              {product.imagens.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setFoto(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  aria-pressed={i === foto}
                  className={`relative aspect-square w-20 overflow-hidden border transition-colors ${
                    i === foto ? "border-gold" : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* informações */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-4">
            <p className="eyebrow text-gold">{product.marca}</p>
            <span className={`text-[11px] font-bold uppercase tracking-wider ${disp.cor}`}>● {disp.label}</span>
          </div>
          <h1 className="mt-3 font-display text-3xl leading-[1.1] text-white sm:text-4xl">{product.nome}</h1>

          <p className="mt-5 text-3xl font-extrabold text-white">
            {formatPreco(product.preco)}
            {product.precoExemplo && <span className="ml-1 align-super text-xs font-semibold text-mist/40">*</span>}
          </p>
          {product.precoPix && <p className="mt-1 text-sm text-mist/55">{formatPreco(product.precoPix)} no Pix</p>}
          {product.parcelamento && <p className="mt-1 text-sm text-mist/55">{product.parcelamento}</p>}
          <p className="mt-1.5 text-xs text-mist/40">
            {product.precoExemplo ? "* Valor ilustrativo — confirme o preço atual pelo WhatsApp." : "Condições de pagamento no WhatsApp."}
          </p>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-mist/65">{product.descricao}</p>

          {/* tamanhos */}
          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-mist/50">Tamanho</p>
              <span className="text-[11px] text-mist/40">consulte a numeração no atendimento</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.tamanhos.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTamanho(t === tamanho ? undefined : t)}
                  aria-pressed={t === tamanho}
                  className={`min-w-11 border px-3 py-2.5 text-sm font-bold transition-colors ${
                    t === tamanho
                      ? "border-gold bg-gold text-ink"
                      : "border-white/15 text-mist/75 hover:border-gold/60 hover:text-gold-light"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* cores */}
          {product.cores.length > 1 && (
            <div className="mt-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-mist/50">Cor</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.cores.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCor(c === cor ? undefined : c)}
                    aria-pressed={c === cor}
                    className={`border px-4 py-2.5 text-sm font-semibold transition-colors ${
                      c === cor
                        ? "border-gold bg-gold text-ink"
                        : "border-white/15 text-mist/75 hover:border-gold/60 hover:text-gold-light"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <a
            href={waLink(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-2.5 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-gold-light"
          >
            <WhatsIcon className="h-5 w-5" />
            Comprar pelo WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-mist/40">
            {tamanho ? `Vamos consultar o tamanho ${tamanho}${cor ? ` na cor ${cor}` : ""} para você.` : "Selecione um tamanho para agilizar o atendimento."}
          </p>

          {/* detalhes editáveis */}
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10 text-sm">
            <details className="faq group py-4">
              <summary className="flex items-center justify-between font-bold text-mist">
                Detalhes do produto
                <span className="faq-icon text-gold">+</span>
              </summary>
              <ul className="mt-3 space-y-1 text-mist/55">
                <li>Marca: {product.marca}</li>
                <li>Categoria: {categoriaLabel[product.categoria]}</li>
                <li>Cores: {product.cores.join(", ")}</li>
                <li>Numeração de referência: {product.tamanhos.join(", ")}</li>
              </ul>
            </details>
            <details className="faq group py-4">
              <summary className="flex items-center justify-between font-bold text-mist">
                Guia de tamanhos
                <span className="faq-icon text-gold">+</span>
              </summary>
              <p className="mt-3 text-mist/55">
                Em dúvida entre dois tamanhos? Envie a numeração que você usa em outras marcas no WhatsApp e a equipe
                indica o caimento ideal. [Edite aqui com a tabela de medidas da loja.]
              </p>
            </details>
            <details className="faq group py-4">
              <summary className="flex items-center justify-between font-bold text-mist">
                Troca e envio
                <span className="faq-icon text-gold">+</span>
              </summary>
              <p className="mt-3 text-mist/55">
                Enviamos para todo o Brasil — o frete é calculado pelo CEP no atendimento. [Edite aqui com a política
                oficial de troca e os prazos de envio da loja.]
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* zoom em tela cheia */}
      {zoom && (
        <div
          className="fixed inset-0 z-[70] flex cursor-zoom-out items-center justify-center bg-ink/95 p-4"
          onClick={() => setZoom(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada de ${product.nome}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.imagens[foto]} alt={product.nome} className="max-h-full max-w-full object-contain" />
          <button
            type="button"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-mist"
            aria-label="Fechar zoom"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
