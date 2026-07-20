import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductView from "./ProductView";
import { getProduct, products, maisVendidos } from "@/data/products";

export function generateStaticParams() {
  return products.filter((p) => p.status === "ativo").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produto não encontrado" };
  return {
    title: product.nome,
    description: `${product.nome} na Pisada de Ouro, Maringá. ${product.descricao}`,
    openGraph: { images: [{ url: product.imagens[0] }] },
  };
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const semelhantes = products
    .filter((p) => p.id !== product.id && p.categoria === product.categoria && p.status === "ativo")
    .slice(0, 4);
  const populares = maisVendidos.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Header />
      <main className="bg-ink pt-24 md:pt-28">
        <ProductView product={product} />

        {semelhantes.length > 0 && (
          <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10">
            <div className="mb-8 border-b hairline pb-6">
              <p className="eyebrow text-gold">Você também pode gostar</p>
              <h2 className="mt-3 font-display text-2xl text-white sm:text-3xl">
                Produtos <span className="italic text-gold-light">semelhantes</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {semelhantes.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {populares.length > 0 && (
          <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
            <div className="mb-8 border-b hairline pb-6">
              <p className="eyebrow text-gold">Mais vendidos</p>
              <h2 className="mt-3 font-display text-2xl text-white sm:text-3xl">
                Os queridinhos <span className="italic text-gold-light">da loja</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {populares.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
