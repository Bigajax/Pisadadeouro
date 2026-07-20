"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products, marcas, type Categoria } from "@/data/products";

const categoriasFiltro: { key: Categoria | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "tenis", label: "Tênis" },
  { key: "feminino", label: "Feminino" },
  { key: "masculino", label: "Masculino" },
  { key: "bolsas", label: "Bolsas" },
  { key: "chinelos", label: "Chinelos" },
  { key: "acessorios", label: "Acessórios" },
];

const ordens = [
  { key: "lancamento", label: "Lançamentos" },
  { key: "procurados", label: "Mais procurados" },
  { key: "menor", label: "Menor preço" },
  { key: "maior", label: "Maior preço" },
];

const faixas = [
  { key: "todas", label: "Todas as faixas", min: 0, max: Infinity },
  { key: "ate100", label: "Até R$ 100", min: 0, max: 100 },
  { key: "100a200", label: "R$ 100 a R$ 200", min: 100, max: 200 },
  { key: "acima200", label: "Acima de R$ 200", min: 200, max: Infinity },
];

const todosTamanhos = ["34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "P", "M", "G", "GG", "Único"];

export default function CatalogClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState<string>("todos");
  const [marca, setMarca] = useState("todas");
  const [genero, setGenero] = useState("todos");
  const [tamanho, setTamanho] = useState("todos");
  const [faixa, setFaixa] = useState("todas");
  const [ordem, setOrdem] = useState("lancamento");
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);

  // lê filtros da URL (links do menu/rodapé)
  useEffect(() => {
    const cat = searchParams.get("categoria");
    const gen = searchParams.get("genero");
    const ord = searchParams.get("ordem");
    const q = searchParams.get("q");
    if (cat) setCategoria(cat);
    if (gen) setGenero(gen);
    if (ord) setOrdem(ord);
    if (q) setBusca(q);
  }, [searchParams]);

  const lista = useMemo(() => {
    const f = faixas.find((x) => x.key === faixa) ?? faixas[0];
    let r = products.filter((p) => p.status === "ativo");

    if (busca.trim()) {
      const q = busca.trim().toLowerCase();
      r = r.filter(
        (p) =>
          p.nome.toLowerCase().includes(q) ||
          p.marca.toLowerCase().includes(q) ||
          p.descricao.toLowerCase().includes(q)
      );
    }
    if (categoria !== "todos") r = r.filter((p) => p.categoria === categoria);
    if (marca !== "todas") r = r.filter((p) => p.marca === marca);
    if (genero !== "todos") r = r.filter((p) => p.genero === genero || p.genero === "unissex");
    if (tamanho !== "todos") r = r.filter((p) => p.tamanhos.includes(tamanho));
    r = r.filter((p) => p.preco >= f.min && p.preco < f.max);

    switch (ordem) {
      case "menor":
        r = [...r].sort((a, b) => a.preco - b.preco);
        break;
      case "maior":
        r = [...r].sort((a, b) => b.preco - a.preco);
        break;
      case "procurados":
        r = [...r].sort((a, b) => Number(b.maisVendido ?? false) - Number(a.maisVendido ?? false));
        break;
      default:
        r = [...r].sort((a, b) => Number(b.lancamento ?? false) - Number(a.lancamento ?? false));
    }
    return r;
  }, [busca, categoria, marca, genero, tamanho, faixa, ordem]);

  const limpar = () => {
    setBusca("");
    setCategoria("todos");
    setMarca("todas");
    setGenero("todos");
    setTamanho("todos");
    setFaixa("todas");
    setOrdem("lancamento");
    router.replace(pathname);
  };

  const filtrosAtivos =
    (categoria !== "todos" ? 1 : 0) +
    (marca !== "todas" ? 1 : 0) +
    (genero !== "todos" ? 1 : 0) +
    (tamanho !== "todos" ? 1 : 0) +
    (faixa !== "todas" ? 1 : 0);

  const selectClass =
    "w-full appearance-none border border-white/15 bg-graphite px-3.5 py-2.5 text-[13px] font-semibold text-mist outline-none transition-colors focus:border-gold";

  const Selects = (
    <>
      <label className="block">
        <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-mist/45">Marca</span>
        <select value={marca} onChange={(e) => setMarca(e.target.value)} className={selectClass}>
          <option value="todas">Todas</option>
          {marcas.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-mist/45">Gênero</span>
        <select value={genero} onChange={(e) => setGenero(e.target.value)} className={selectClass}>
          <option value="todos">Todos</option>
          <option value="feminino">Feminino</option>
          <option value="masculino">Masculino</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-mist/45">Tamanho</span>
        <select value={tamanho} onChange={(e) => setTamanho(e.target.value)} className={selectClass}>
          <option value="todos">Todos</option>
          {todosTamanhos.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-mist/45">Preço</span>
        <select value={faixa} onChange={(e) => setFaixa(e.target.value)} className={selectClass}>
          {faixas.map((f) => (
            <option key={f.key} value={f.key}>
              {f.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-mist/45">Ordenar por</span>
        <select value={ordem} onChange={(e) => setOrdem(e.target.value)} className={selectClass}>
          {ordens.map((o) => (
            <option key={o.key} value={o.key}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );

  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
      {/* cabeçalho */}
      <div className="border-b hairline pb-8">
        <p className="eyebrow text-gold">Catálogo</p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="font-display text-4xl leading-[1.05] text-white sm:text-5xl">
            Toda a vitrine, <span className="italic text-gold-light">no seu tempo.</span>
          </h1>
          <div className="relative w-full max-w-sm">
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por nome ou marca…"
              aria-label="Buscar produto"
              className="w-full border border-white/15 bg-graphite py-3 pl-11 pr-4 text-sm text-mist outline-none transition-colors placeholder:text-mist/35 focus:border-gold"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist/40"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* categorias como abas */}
      <div className="rail -mx-5 mt-8 flex gap-2 overflow-x-auto px-5 md:-mx-10 md:px-10">
        {categoriasFiltro.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setCategoria(c.key)}
            aria-pressed={categoria === c.key}
            className={`flex-none whitespace-nowrap px-4 py-2 text-[12px] font-bold uppercase tracking-wider transition-colors ${
              categoria === c.key
                ? "bg-gold text-ink"
                : "border border-white/15 text-mist/60 hover:border-gold/50 hover:text-gold-light"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* filtros desktop */}
      <div className="mt-6 hidden grid-cols-5 gap-4 md:grid">{Selects}</div>

      {/* filtros mobile */}
      <div className="mt-5 flex items-center justify-between gap-3 md:hidden">
        <button
          type="button"
          onClick={() => setFiltrosAbertos(true)}
          className="inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider text-mist"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
            <path d="M4 6h16M7 12h10m-7 6h4" />
          </svg>
          Filtrar{filtrosAtivos > 0 ? ` (${filtrosAtivos})` : ""}
        </button>
        <span className="text-xs text-mist/45">{lista.length} itens</span>
      </div>

      {filtrosAbertos && (
        <div className="fixed inset-0 z-[60] flex flex-col justify-end bg-ink/70 md:hidden" role="dialog" aria-modal="true" aria-label="Filtros">
          <button type="button" className="flex-1" aria-label="Fechar filtros" onClick={() => setFiltrosAbertos(false)} />
          <div className="max-h-[80svh] space-y-4 overflow-y-auto border-t border-gold/30 bg-graphite p-6 pb-10">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-gold">Filtros</p>
              <button
                type="button"
                onClick={() => setFiltrosAbertos(false)}
                aria-label="Fechar"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            {Selects}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={limpar}
                className="flex-1 border border-white/20 px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-mist"
              >
                Limpar
              </button>
              <button
                type="button"
                onClick={() => setFiltrosAbertos(false)}
                className="flex-1 bg-gold px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-ink"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* resultado */}
      <div className="mt-8 hidden items-center justify-between md:flex">
        <p className="text-xs text-mist/45">
          {lista.length} {lista.length === 1 ? "produto" : "produtos"}
        </p>
        {(filtrosAtivos > 0 || busca) && (
          <button
            type="button"
            onClick={limpar}
            className="text-[12px] font-bold uppercase tracking-wider text-gold-light hover:text-gold"
          >
            Limpar filtros
          </button>
        )}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
        {lista.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {lista.length === 0 && (
        <div className="border border-white/10 py-20 text-center">
          <p className="font-display text-2xl text-white">Nada por aqui com esses filtros.</p>
          <p className="mt-2 text-sm text-mist/55">Limpe os filtros ou consulte a equipe — o estoque muda toda semana.</p>
          <button
            type="button"
            onClick={limpar}
            className="mt-6 inline-flex bg-gold px-6 py-3 text-[12px] font-bold uppercase tracking-wider text-ink"
          >
            Limpar filtros
          </button>
        </div>
      )}

      <p className="mt-8 text-[11px] text-mist/35">
        * Valores marcados são ilustrativos e editáveis — confirme preço e disponibilidade pelo WhatsApp.
      </p>
    </div>
  );
}
