import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import { categorias, femininos, lancamentos, masculinos } from "@/data/products";

/* ---------------------------------------------------------- */
/* Faixa de benefícios em marquee                              */
/* ---------------------------------------------------------- */

const beneficios = [
  "Enviamos para todo o Brasil",
  "Atendimento rápido pelo WhatsApp",
  "Loja física em Maringá",
  "Produtos selecionados",
  "Novidades frequentes",
];

export function BenefitsTicker() {
  const items = [...beneficios, ...beneficios];
  return (
    <div className="overflow-hidden border-y border-gold/25 bg-gold py-3 text-ink" aria-label="Benefícios da loja">
      <div className="marquee-track">
        {items.map((b, i) => (
          <span key={i} className="flex items-center whitespace-nowrap px-6 text-[12px] font-extrabold uppercase tracking-[0.18em]">
            {b}
            <svg width="12" height="12" viewBox="0 0 10 10" className="ml-12 opacity-60" aria-hidden>
              <path d="M5 0l1.2 3.8H10L6.9 6.1 8.1 10 5 7.6 1.9 10l1.2-3.9L0 3.8h3.8Z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- */
/* Categorias principais — mosaico assimétrico                 */
/* ---------------------------------------------------------- */

export function Categorias() {
  const [tenis, feminino, masculino, bolsas, chinelos, acessorios] = categorias;
  const Cell = ({
    cat,
    className,
    big = false,
  }: {
    cat: (typeof categorias)[number];
    className?: string;
    big?: boolean;
  }) => (
    <Link
      href={
        cat.key === "feminino" || cat.key === "masculino"
          ? `/catalogo?genero=${cat.key}`
          : `/catalogo?categoria=${cat.key}`
      }
      className={`img-zoom group relative block ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cat.imagem}
        alt={`Categoria ${cat.nome}`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent transition-opacity group-hover:opacity-90" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5">
        <div>
          <h3 className={`font-display text-white ${big ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}>
            {cat.nome}
          </h3>
          <p className="mt-1 hidden max-w-[220px] text-xs leading-relaxed text-mist/75 md:block">{cat.frase}</p>
        </div>
        <span className="mb-1 hidden h-9 w-9 flex-none items-center justify-center rounded-full border border-gold/50 text-gold-light transition-all group-hover:bg-gold group-hover:text-ink md:flex">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden>
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );

  return (
    <section className="bg-ink py-20 md:py-28" id="categorias">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Categorias"
            titulo={
              <>
                Encontre o <span className="italic text-gold-light">seu</span> estilo
              </>
            }
            texto="Tênis, moda feminina, masculina e os detalhes que fecham o look."
            acao={{ href: "/catalogo", label: "Ver catálogo completo" }}
          />
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4" style={{ gridAutoRows: "minmax(170px, auto)" }}>
            <Cell cat={tenis} big className="col-span-2 row-span-2 min-h-[320px] md:min-h-[460px]" />
            <Cell cat={feminino} className="min-h-[170px] md:row-span-2 md:min-h-0" />
            <Cell cat={masculino} className="min-h-[170px] md:row-span-2 md:min-h-0" />
            <Cell cat={bolsas} className="min-h-[170px]" />
            <Cell cat={chinelos} className="min-h-[170px]" />
            <Cell cat={acessorios} className="col-span-2 min-h-[170px]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* Lançamentos — trilho horizontal                             */
/* ---------------------------------------------------------- */

export function Lancamentos() {
  return (
    <section className="bg-bone py-20 md:py-28" id="novidades">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionHeader
            tone="light"
            eyebrow="Acabaram de chegar"
            titulo={
              <>
                Novidades <span className="italic">selecionadas</span> para você
              </>
            }
            texto="Reposições e lançamentos direto do Instagram da loja, toda semana."
            acao={{ href: "/catalogo?ordem=lancamento", label: "Ver todos os lançamentos" }}
          />
        </Reveal>
        <Reveal>
          <div className="rail -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:-mx-10 md:px-10">
            {lancamentos.map((p) => (
              <div key={p.id} className="w-[240px] flex-none snap-start sm:w-[270px]">
                <ProductCard product={p} tone="light" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-ink/40">* Valores ilustrativos e editáveis — confirme pelo WhatsApp.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* Banner feminino + produtos                                  */
/* ---------------------------------------------------------- */

export function BannerFeminino() {
  return (
    <section className="bg-bone">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 px-5 pb-20 md:px-10 md:pb-28 lg:grid-cols-[1fr_1.15fr]">
        <Reveal className="img-zoom relative min-h-[420px] lg:min-h-[560px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/fem-vestido-boiadeira.jpg"
            alt="Modelo com vestido de franjas da coleção feminina"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </Reveal>
        <Reveal className="flex flex-col justify-center bg-ink p-8 sm:p-12 lg:p-16">
          <p className="eyebrow text-gold">Coleção feminina</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl">
            Moda feminina para chegar <span className="italic text-gold-light">marcando presença.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-mist/65">
            Peças, bolsas, calçados e acessórios para criar looks que chamam atenção.
          </p>
          <Link
            href="/catalogo?genero=feminino"
            className="mt-8 inline-flex w-fit items-center gap-2 bg-gold px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-ink transition-colors hover:bg-gold-light"
          >
            Explorar feminino
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3.5 w-3.5" aria-hidden>
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function ProdutosFemininos() {
  const destaqueFem = femininos.filter((p) => p.categoria !== "tenis").slice(0, 4);
  const tenisFem = femininos.filter((p) => p.categoria === "tenis").slice(0, 4);
  const lista = [...destaqueFem.slice(0, 4), ...tenisFem].slice(0, 8);
  return (
    <section className="bg-bone pb-20 md:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionHeader
            tone="light"
            eyebrow="Escolhas para elas"
            titulo={
              <>
                Do vestido ao tênis, <span className="italic">tudo conversa</span>
              </>
            }
            acao={{ href: "/catalogo?genero=feminino", label: "Ver coleção feminina" }}
          />
        </Reveal>
        <Reveal>
          <div className="rail -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:-mx-10 md:px-10">
            {lista.map((p) => (
              <div key={p.id} className="w-[240px] flex-none snap-start sm:w-[270px]">
                <ProductCard product={p} tone="light" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* Banner masculino + produtos                                 */
/* ---------------------------------------------------------- */

export function BannerMasculino() {
  return (
    <section className="bg-graphite">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[1.15fr_1fr]">
        <Reveal className="order-2 flex flex-col justify-center bg-carbon p-8 sm:p-12 lg:order-1 lg:p-16">
          <p className="eyebrow text-gold">Coleção masculina</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.12] text-white sm:text-4xl lg:text-5xl">
            Estilo masculino <span className="italic text-gold-light">sem complicação.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-mist/65">
            Peças versáteis para trabalhar, sair ou compor um look urbano.
          </p>
          <Link
            href="/catalogo?genero=masculino"
            className="mt-8 inline-flex w-fit items-center gap-2 border border-gold px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-gold-light transition-colors hover:bg-gold hover:text-ink"
          >
            Explorar masculino
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3.5 w-3.5" aria-hidden>
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </Reveal>
        <Reveal className="img-zoom relative order-1 min-h-[420px] lg:order-2 lg:min-h-[560px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/masc-conjunto-navy.jpg"
            alt="Conjunto masculino exposto na loja"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function ProdutosMasculinos() {
  const roupas = masculinos.filter((p) => p.categoria === "masculino").slice(0, 4);
  const tenisMasc = masculinos.filter((p) => p.categoria === "tenis" && p.destaque).slice(0, 4);
  const lista = [...roupas, ...tenisMasc].slice(0, 8);
  return (
    <section className="bg-graphite pb-20 md:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionHeader
            eyebrow="Escolhas para eles"
            titulo={
              <>
                Básicos fortes, <span className="italic text-gold-light">pisada certa</span>
              </>
            }
            acao={{ href: "/catalogo?genero=masculino", label: "Ver coleção masculina" }}
          />
        </Reveal>
        <Reveal>
          <div className="rail -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:-mx-10 md:px-10">
            {lista.map((p) => (
              <div key={p.id} className="w-[240px] flex-none snap-start sm:w-[270px]">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* Marcas                                                      */
/* ---------------------------------------------------------- */

const marcasLoja = ["New Balance", "Nike", "Adidas", "Puma", "Mizuno", "Vans", "e mais"];

export function Marcas() {
  return (
    <section className="border-y hairline-soft bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-gold">Marcas que fazem parte da sua pisada</p>
          <ul className="mt-8 flex flex-wrap items-baseline gap-x-10 gap-y-4">
            {marcasLoja.map((m, i) => (
              <li
                key={m}
                className={`font-display text-2xl transition-colors hover:text-gold-light sm:text-3xl md:text-4xl ${
                  i === marcasLoja.length - 1 ? "italic text-gold/70" : "text-mist/70"
                }`}
              >
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[11px] text-mist/40">
            Disponibilidade de modelos e marcas sujeita ao estoque. A Pisada de Ouro é uma loja multimarcas independente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
