import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import MobileNav from "@/components/MobileNav";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pisada de Ouro | Tênis, Moda Feminina e Masculina em Maringá",
    template: "%s | Pisada de Ouro",
  },
  description:
    "Encontre tênis premium, moda feminina, moda masculina e acessórios na Pisada de Ouro. Loja física em Maringá e envios para todo o Brasil.",
  keywords: [
    "loja de tênis em Maringá",
    "tênis premium Maringá",
    "moda feminina Maringá",
    "moda masculina Maringá",
    "loja de roupas em Maringá",
    "New Balance Maringá",
    "Adidas Maringá",
    "Nike Maringá",
  ],
  openGraph: {
    title: "Pisada de Ouro | Tênis, Moda Feminina e Masculina em Maringá",
    description:
      "Tênis premium, moda feminina e masculina para quem gosta de se destacar. Loja física em Maringá, envios para todo o Brasil.",
    type: "website",
    locale: "pt_BR",
    siteName: "Pisada de Ouro",
    images: [{ url: "/images/tenis-nb9060-creme-azul.jpg" }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Pisada de Ouro",
  description:
    "Loja de tênis, roupas e acessórios em Maringá. Moda feminina e masculina com envio para todo o Brasil.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Mandacaru, 3049",
    addressLocality: "Maringá",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  sameAs: [site.instagram],
  telephone: "+55 44 99738-9995",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col antialiased pb-[60px] lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
