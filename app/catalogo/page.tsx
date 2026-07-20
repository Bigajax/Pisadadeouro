import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Catálogo completo da Pisada de Ouro: tênis premium, moda feminina, masculina, bolsas, chinelos e acessórios em Maringá.",
};

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className="bg-ink pt-24 md:pt-28">
        <Suspense>
          <CatalogClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
