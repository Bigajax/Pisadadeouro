import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SneakerSpotlight from "@/components/home/SneakerSpotlight";
import {
  BenefitsTicker,
  Categorias,
  Lancamentos,
  BannerFeminino,
  ProdutosFemininos,
  BannerMasculino,
  ProdutosMasculinos,
  Marcas,
} from "@/components/home/Showcase";
import {
  Sobre,
  ComoComprar,
  LojaFisica,
  InstagramGrid,
  Depoimentos,
  CTAFinal,
  FAQ,
} from "@/components/home/Story";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BenefitsTicker />
        <Categorias />
        <Lancamentos />
        <SneakerSpotlight />
        <BannerFeminino />
        <ProdutosFemininos />
        <BannerMasculino />
        <ProdutosMasculinos />
        <Marcas />
        <Sobre />
        <ComoComprar />
        <LojaFisica />
        <InstagramGrid />
        <Depoimentos />
        <CTAFinal />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
