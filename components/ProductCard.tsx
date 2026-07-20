import Link from "next/link";
import { formatPreco, type Product } from "@/data/products";

const tagLabel: Record<string, string> = {
  lancamento: "Novo",
  maisVendido: "Mais vendido",
  "ultimas-unidades": "Últimas unidades",
};

/**
 * Card no estilo "etiqueta de caixa de tênis": foto grande,
 * etiqueta inferior com marca, numeração e preço + código de barras.
 */
export default function ProductCard({
  product,
  tone = "dark",
}: {
  product: Product;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  const tags: string[] = [];
  if (product.lancamento) tags.push(tagLabel.lancamento);
  if (product.maisVendido) tags.push(tagLabel.maisVendido);
  if (product.disponibilidade === "ultimas-unidades") tags.push(tagLabel["ultimas-unidades"]);

  const sizeRun =
    product.tamanhos.length > 1
      ? `${product.tamanhos[0]}–${product.tamanhos[product.tamanhos.length - 1]}`
      : product.tamanhos[0];

  return (
    <article
      className={`group flex w-full flex-col border ${
        dark ? "border-white/10 bg-graphite" : "border-ink/10 bg-white"
      }`}
    >
      <Link href={`/produto/${product.slug}`} className="img-zoom relative block aspect-[4/5]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imagens[0]}
          alt={`${product.nome} — ${product.marca}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {tags.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="bg-ink/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-light"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </Link>

      {/* etiqueta da caixa */}
      <div className={`flex flex-col gap-1 border-t px-4 pb-4 pt-3 ${dark ? "hairline" : "hairline-dark"}`}>
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
              dark ? "text-gold" : "text-ink/50"
            }`}
          >
            {product.marca}
          </span>
          <span className={`text-[10px] font-semibold tracking-wider ${dark ? "text-mist/40" : "text-ink/35"}`}>
            {sizeRun}
          </span>
        </div>

        <Link
          href={`/produto/${product.slug}`}
          className={`text-[15px] font-semibold leading-snug transition-colors ${
            dark ? "text-mist group-hover:text-gold-light" : "text-ink group-hover:text-gold"
          }`}
        >
          {product.nome}
        </Link>

        <div className="mt-1.5 flex items-end justify-between gap-2">
          <div>
            <p className={`text-lg font-extrabold ${dark ? "text-white" : "text-ink"}`}>
              {formatPreco(product.preco)}
              {product.precoExemplo && (
                <span className={`ml-1 align-super text-[9px] font-semibold ${dark ? "text-mist/40" : "text-ink/35"}`}>
                  *
                </span>
              )}
            </p>
            {product.precoPix && (
              <p className={`text-[11px] ${dark ? "text-mist/50" : "text-ink/45"}`}>
                {formatPreco(product.precoPix)} no Pix
              </p>
            )}
          </div>
          {/* mini código de barras da etiqueta */}
          <svg width="30" height="16" aria-hidden className={dark ? "text-mist/25" : "text-ink/20"}>
            {[0, 3, 5, 9, 12, 16, 18, 22, 26, 28].map((x, i) => (
              <rect key={x} x={x} y="0" width={i % 3 === 0 ? 2 : 1} height="16" fill="currentColor" />
            ))}
          </svg>
        </div>
      </div>
    </article>
  );
}
