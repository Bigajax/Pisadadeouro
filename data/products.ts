// ============================================================
// CATÁLOGO DE PRODUTOS — totalmente editável
//
// precoExemplo: true  →  valor ilustrativo, ajuste para o preço real.
// Preços sem essa marca vieram das legendas do Instagram da loja
// (julho/2026) — confira antes de publicar.
// Fotos: /public/images (extraídas do Instagram @pisadadeouroo).
// ============================================================

export type Categoria =
  | "tenis"
  | "feminino"
  | "masculino"
  | "bolsas"
  | "chinelos"
  | "acessorios";

export type Genero = "feminino" | "masculino" | "unissex";

export interface Product {
  id: string;
  nome: string;
  slug: string;
  descricao: string;
  categoria: Categoria;
  marca: string;
  genero: Genero;
  estilo?: "casual" | "esportivo";
  preco: number;
  precoExemplo?: boolean;
  precoPix?: number; // preencha se houver desconto no Pix
  parcelamento?: string; // ex.: "3x de R$ 93,33 sem juros"
  imagens: string[];
  tamanhos: string[];
  cores: string[];
  disponibilidade: "disponivel" | "consulte" | "ultimas-unidades";
  destaque?: boolean;
  lancamento?: boolean;
  maisVendido?: boolean;
  status: "ativo" | "inativo";
}

export const categorias: { key: Categoria; nome: string; frase: string; imagem: string }[] = [
  { key: "tenis", nome: "Tênis", frase: "Modelos que transformam qualquer look.", imagem: "/images/tenis-nb9060-creme-azul.jpg" },
  { key: "feminino", nome: "Feminino", frase: "Moda para mulheres que gostam de presença.", imagem: "/images/fem-look-branco.jpg" },
  { key: "masculino", nome: "Masculino", frase: "Estilo, conforto e personalidade.", imagem: "/images/masc-look-preto.jpg" },
  { key: "bolsas", nome: "Bolsas", frase: "Detalhes que completam a produção.", imagem: "/images/bolsa-kit-branca.jpg" },
  { key: "chinelos", nome: "Chinelos", frase: "Conforto com identidade.", imagem: "/images/chinelo-gucci-preto.jpg" },
  { key: "acessorios", nome: "Acessórios", frase: "O toque final do seu estilo.", imagem: "/images/acess-bones.jpg" },
];

export const marcas = [
  "New Balance",
  "Nike",
  "Adidas",
  "Puma",
  "Mizuno",
  "Vans",
  "Multimarcas",
];

const TAM_MASC = ["38", "39", "40", "41", "42", "43"];
const TAM_FEM = ["34", "35", "36", "37", "38", "39"];
const TAM_ROUPA = ["P", "M", "G", "GG"];

export const products: Product[] = [
  // ------------------------------------------------ TÊNIS
  {
    id: "p01",
    nome: "New Balance 9060 Creme com Azul",
    slug: "new-balance-9060-creme-azul",
    descricao:
      "O modelo mais desejado do momento. Cabedal em camadas com tons de creme e detalhes em azul royal, entressola robusta e pisada macia para o dia inteiro.",
    categoria: "tenis",
    marca: "New Balance",
    genero: "unissex",
    estilo: "casual",
    preco: 279.99,
    imagens: ["/images/tenis-nb9060-creme-azul.jpg", "/images/tenis-nb9060-off-azul.jpg", "/images/tenis-nb9060-pares.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Creme com azul"],
    disponibilidade: "disponivel",
    destaque: true,
    lancamento: true,
    maisVendido: true,
    status: "ativo",
  },
  {
    id: "p02",
    nome: "New Balance 9060 Branco",
    slug: "new-balance-9060-branco",
    descricao:
      "A versão clean do queridinho da loja. Branco com cinza, volume na medida e conforto que segura qualquer rolê — do trabalho ao fim de semana.",
    categoria: "tenis",
    marca: "New Balance",
    genero: "unissex",
    estilo: "casual",
    preco: 279.99,
    imagens: ["/images/tenis-nb9060-branco-mao.jpg", "/images/tenis-nb9060-pares.jpg", "/images/tenis-nb-branco-par.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Branco"],
    disponibilidade: "disponivel",
    destaque: true,
    maisVendido: true,
    status: "ativo",
  },
  {
    id: "p03",
    nome: "New Balance 530 Branco",
    slug: "new-balance-530-branco",
    descricao:
      "Clássico dos anos 2000 de volta às ruas. Malha respirável, recortes prateados e aquele visual retrô que combina com tudo.",
    categoria: "tenis",
    marca: "New Balance",
    genero: "unissex",
    estilo: "casual",
    preco: 169.99,
    imagens: ["/images/tenis-nb530-branco.jpg", "/images/tenis-nb-branco-par.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Branco com prata"],
    disponibilidade: "disponivel",
    destaque: true,
    lancamento: true,
    status: "ativo",
  },
  {
    id: "p04",
    nome: "New Balance Preto com Branco",
    slug: "new-balance-preto-branco",
    descricao:
      "Contraste marcante para quem gosta de presença: base preta, logo branco em destaque e solado esculpido.",
    categoria: "tenis",
    marca: "New Balance",
    genero: "masculino",
    estilo: "casual",
    preco: 169.99,
    imagens: ["/images/tenis-nb-preto-luva.jpg", "/images/tenis-nb-preto-branco-pes.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Preto com branco"],
    disponibilidade: "disponivel",
    destaque: true,
    status: "ativo",
  },
  {
    id: "p05",
    nome: "New Balance Creme",
    slug: "new-balance-creme",
    descricao:
      "Tom neutro que eleva o look inteiro. Creme do cabedal ao solado, perfeito para produções monocromáticas.",
    categoria: "tenis",
    marca: "New Balance",
    genero: "unissex",
    estilo: "casual",
    preco: 169.99,
    imagens: ["/images/tenis-nb-creme-pes.jpg", "/images/tenis-nb-creme-sacola.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Creme"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p06",
    nome: "Adidas Campus Preto",
    slug: "adidas-campus-preto",
    descricao:
      "Camurça preta, três listras off-white e sola plataforma. O modelo que dominou o streetwear, disponível na Pisada de Ouro.",
    categoria: "tenis",
    marca: "Adidas",
    genero: "unissex",
    estilo: "casual",
    preco: 169.99,
    imagens: ["/images/tenis-adidas-campus-preto.jpg", "/images/tenis-adidas-preto-plataforma.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Preto"],
    disponibilidade: "disponivel",
    destaque: true,
    lancamento: true,
    maisVendido: true,
    status: "ativo",
  },
  {
    id: "p07",
    nome: "Adidas Campus Cinza",
    slug: "adidas-campus-cinza",
    descricao:
      "A versão em cinza claro do Campus: suave, versátil e com o mesmo caimento icônico.",
    categoria: "tenis",
    marca: "Adidas",
    genero: "unissex",
    estilo: "casual",
    preco: 169.99,
    imagens: ["/images/tenis-adidas-campus-cinza.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Cinza"],
    disponibilidade: "disponivel",
    lancamento: true,
    status: "ativo",
  },
  {
    id: "p08",
    nome: "Adidas Superstar Branco",
    slug: "adidas-superstar-branco",
    descricao:
      "O shell toe que nunca sai de moda. Couro branco com as três listras pretas — um clássico absoluto.",
    categoria: "tenis",
    marca: "Adidas",
    genero: "unissex",
    estilo: "casual",
    preco: 169.99,
    imagens: ["/images/tenis-adidas-superstar.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Branco com preto"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p09",
    nome: "Adidas Marinho Esportivo",
    slug: "adidas-marinho-esportivo",
    descricao:
      "Leve e macio para treinar ou passar o dia em pé. Azul marinho com listras brancas e entressola amortecida.",
    categoria: "tenis",
    marca: "Adidas",
    genero: "masculino",
    estilo: "esportivo",
    preco: 169.99,
    imagens: ["/images/tenis-adidas-navy.jpg", "/images/tenis-adidas-azul-luva.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Azul marinho"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p10",
    nome: "Adidas Preto Esportivo",
    slug: "adidas-preto-esportivo",
    descricao:
      "All black com listras refletivas. Conforto, estilo e versatilidade para o seu dia a dia.",
    categoria: "tenis",
    marca: "Adidas",
    genero: "masculino",
    estilo: "esportivo",
    preco: 169.99,
    imagens: ["/images/tenis-adidas-preto-branco.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Preto"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p11",
    nome: "Nike Dunk Preto com Vermelho",
    slug: "nike-dunk-preto-vermelho",
    descricao:
      "Silhueta lendária do basquete com sola vermelha de atitude. Pra quem não quer passar despercebido.",
    categoria: "tenis",
    marca: "Nike",
    genero: "masculino",
    estilo: "casual",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-nike-dunk-vermelho.jpg", "/images/tenis-nike-dunk-vermelho-par.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Preto com vermelho"],
    disponibilidade: "consulte",
    destaque: true,
    status: "ativo",
  },
  {
    id: "p12",
    nome: "Nike Dunk Panda",
    slug: "nike-dunk-panda",
    descricao:
      "O contraste preto e branco mais pedido do Instagram. Combina com literalmente qualquer look.",
    categoria: "tenis",
    marca: "Nike",
    genero: "unissex",
    estilo: "casual",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-nike-dunk-panda.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Preto com branco"],
    disponibilidade: "consulte",
    maisVendido: true,
    status: "ativo",
  },
  {
    id: "p13",
    nome: "Nike Air Force Branco",
    slug: "nike-air-force-branco",
    descricao:
      "O branco absoluto que virou uniforme das ruas. Couro limpo, solado Air e presença garantida.",
    categoria: "tenis",
    marca: "Nike",
    genero: "unissex",
    estilo: "casual",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-nike-airforce.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Branco"],
    disponibilidade: "disponivel",
    destaque: true,
    status: "ativo",
  },
  {
    id: "p14",
    nome: "Nike Air Max Preto com Azul",
    slug: "nike-air-max-preto-azul",
    descricao:
      "Amortecimento visível e gradiente azul no cabedal. Esportivo no desempenho, estiloso no visual.",
    categoria: "tenis",
    marca: "Nike",
    genero: "masculino",
    estilo: "esportivo",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-nike-airmax-azul.jpg", "/images/tenis-nike-azul-luva.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Preto com azul"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p15",
    nome: "Nike Air Max Preto com Roxo",
    slug: "nike-air-max-preto-roxo",
    descricao:
      "Base preta com detalhes em roxo — diferente do que todo mundo tem, do jeito que você gosta.",
    categoria: "tenis",
    marca: "Nike",
    genero: "masculino",
    estilo: "esportivo",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-nike-airmax-roxo.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Preto com roxo"],
    disponibilidade: "consulte",
    status: "ativo",
  },
  {
    id: "p16",
    nome: "Nike Branco Off Feminino",
    slug: "nike-branco-off-feminino",
    descricao:
      "Branco com off white: puro charme e versatilidade. O toque moderno que você ama, direto das novidades da loja.",
    categoria: "tenis",
    marca: "Nike",
    genero: "feminino",
    estilo: "casual",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-nike-branco-off.jpg", "/images/tenis-nike-creme.jpg"],
    tamanhos: TAM_FEM,
    cores: ["Branco off"],
    disponibilidade: "disponivel",
    lancamento: true,
    destaque: true,
    status: "ativo",
  },
  {
    id: "p17",
    nome: "Nike Preto com Rosa Feminino",
    slug: "nike-preto-rosa-feminino",
    descricao:
      "Preto com explosão de rosa pink. Feminino, esportivo e cheio de energia.",
    categoria: "tenis",
    marca: "Nike",
    genero: "feminino",
    estilo: "esportivo",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-nike-rosa-fem.jpg", "/images/tenis-branco-rosa-fem.jpg"],
    tamanhos: TAM_FEM,
    cores: ["Preto com rosa"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p18",
    nome: "Mizuno Preto com Dourado",
    slug: "mizuno-preto-dourado",
    descricao:
      "A pisada de ouro literal: ondas douradas sobre preto, amortecimento de corrida e conforto premium.",
    categoria: "tenis",
    marca: "Mizuno",
    genero: "masculino",
    estilo: "esportivo",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-mizuno-dourado.jpg", "/images/tenis-mizuno-preto-box.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Preto com dourado"],
    disponibilidade: "disponivel",
    destaque: true,
    status: "ativo",
  },
  {
    id: "p19",
    nome: "Mizuno Preto com Branco",
    slug: "mizuno-preto-branco",
    descricao:
      "Ideal pra treinar, trabalhar ou sair com estilo. Super leve, solado macio e visual moderno.",
    categoria: "tenis",
    marca: "Mizuno",
    genero: "masculino",
    estilo: "esportivo",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-mizuno-preto-branco.jpg", "/images/tenis-mizuno-preto-box.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Preto com branco"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p20",
    nome: "Puma Branco Plataforma",
    slug: "puma-branco-plataforma",
    descricao:
      "Sola tratorada, couro branco e recortes em cinza. O plataforma que alonga a silhueta com conforto.",
    categoria: "tenis",
    marca: "Puma",
    genero: "feminino",
    estilo: "casual",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-puma-branco-luva.jpg", "/images/tenis-puma-creme.jpg"],
    tamanhos: TAM_FEM,
    cores: ["Branco"],
    disponibilidade: "disponivel",
    lancamento: true,
    status: "ativo",
  },
  {
    id: "p21",
    nome: "Puma Preto com Branco",
    slug: "puma-preto-branco",
    descricao:
      "Bicolor clássico com plataforma. Fácil de combinar e impossível de passar batido.",
    categoria: "tenis",
    marca: "Puma",
    genero: "feminino",
    estilo: "casual",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-puma-preto-branco.jpg"],
    tamanhos: TAM_FEM,
    cores: ["Preto com branco"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p22",
    nome: "Vans Preto",
    slug: "vans-preto",
    descricao:
      "Básico, estiloso e fácil de combinar. Aquele tipo de tênis que salva qualquer produção.",
    categoria: "tenis",
    marca: "Vans",
    genero: "unissex",
    estilo: "casual",
    preco: 149.99,
    precoExemplo: true,
    imagens: ["/images/tenis-vans-preto-pes.jpg", "/images/tenis-vans-preto-sacola.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Preto"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p23",
    nome: "Adidas Rosa Feminino",
    slug: "adidas-rosa-feminino",
    descricao:
      "Toques de rosa sobre base neutra: delicado, confortável e perfeito para o dia a dia.",
    categoria: "tenis",
    marca: "Adidas",
    genero: "feminino",
    estilo: "esportivo",
    preco: 169.99,
    imagens: ["/images/tenis-adidas-rosa-fem.jpg"],
    tamanhos: TAM_FEM,
    cores: ["Rosa"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p24",
    nome: "Linha Urban Monocromática",
    slug: "linha-urban-monocromatica",
    descricao:
      "Cadarços robustos, couro fosco e cor única da sola ao cabedal. Disponível em caramelo e grafite.",
    categoria: "tenis",
    marca: "Multimarcas",
    genero: "masculino",
    estilo: "casual",
    preco: 189.99,
    precoExemplo: true,
    imagens: ["/images/tenis-caramelo-luva.jpg", "/images/tenis-grafite-luva.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Caramelo", "Grafite"],
    disponibilidade: "consulte",
    lancamento: true,
    status: "ativo",
  },
  {
    id: "p25",
    nome: "Nike TN Cinza com Azul",
    slug: "nike-tn-cinza-azul",
    descricao:
      "Amortecimento Tuned e visual agressivo. Um par pra quem vive o streetwear de verdade.",
    categoria: "tenis",
    marca: "Nike",
    genero: "masculino",
    estilo: "esportivo",
    preco: 169.99,
    precoExemplo: true,
    imagens: ["/images/tenis-nike-tn-azul.jpg"],
    tamanhos: TAM_MASC,
    cores: ["Cinza com azul"],
    disponibilidade: "ultimas-unidades",
    status: "ativo",
  },

  // ------------------------------------------------ FEMININO
  {
    id: "p26",
    nome: "Conjunto Feminino Bege",
    slug: "conjunto-feminino-bege",
    descricao:
      "Cropped de manga longa e pantalona fluida no tom bege. Conforto e elegância no mesmo look.",
    categoria: "feminino",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 189.99,
    imagens: ["/images/fem-conjunto-bege.jpg"],
    tamanhos: TAM_ROUPA,
    cores: ["Bege"],
    disponibilidade: "disponivel",
    destaque: true,
    lancamento: true,
    status: "ativo",
  },
  {
    id: "p27",
    nome: "Vestido Boiadeira com Franjas",
    slug: "vestido-boiadeira-franjas",
    descricao:
      "Franjas que trazem movimento e muito charme, em tecido de alta qualidade que veste impecavelmente.",
    categoria: "feminino",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 189.9,
    imagens: ["/images/fem-vestido-boiadeira.jpg", "/images/fem-vestido-franjas.jpg"],
    tamanhos: TAM_ROUPA,
    cores: ["Preto", "Marrom"],
    disponibilidade: "disponivel",
    destaque: true,
    status: "ativo",
  },
  {
    id: "p28",
    nome: "Vestido Longo Preto",
    slug: "vestido-longo-preto",
    descricao:
      "Caimento fluido, alças finas e elegância sem esforço — do passeio ao evento.",
    categoria: "feminino",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 110,
    imagens: ["/images/fem-vestido-preto.jpg"],
    tamanhos: ["Único"],
    cores: ["Preto"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p29",
    nome: "Conjunto Marrom Comfy",
    slug: "conjunto-marrom-comfy",
    descricao:
      "Aquele look comfy + chic que você coloca e já se sente poderosa. Blusa e pantalona em malha canelada.",
    categoria: "feminino",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 189.99,
    precoExemplo: true,
    imagens: ["/images/fem-conjunto-marrom.jpg"],
    tamanhos: TAM_ROUPA,
    cores: ["Marrom"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p30",
    nome: "Vestido Tomara que Caia Marrom",
    slug: "vestido-tomara-que-caia-marrom",
    descricao:
      "Curto, ajustado e cheio de presença. O tom terroso que valoriza todos os tons de pele.",
    categoria: "feminino",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 110,
    precoExemplo: true,
    imagens: ["/images/fem-vestido-marrom.jpg"],
    tamanhos: ["Único"],
    cores: ["Marrom"],
    disponibilidade: "consulte",
    status: "ativo",
  },
  {
    id: "p31",
    nome: "Look Total White",
    slug: "look-total-white",
    descricao:
      "Cropped estruturado e pantalona alfaiatada em branco: sofisticação para chegar marcando presença.",
    categoria: "feminino",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 219.9,
    precoExemplo: true,
    imagens: ["/images/fem-look-branco.jpg"],
    tamanhos: TAM_ROUPA,
    cores: ["Branco"],
    disponibilidade: "consulte",
    lancamento: true,
    status: "ativo",
  },
  {
    id: "p32",
    nome: "Blazer Dress Branco",
    slug: "blazer-dress-branco",
    descricao:
      "Vestido-blazer com botões dourados: poder e feminilidade na mesma peça.",
    categoria: "feminino",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 179.9,
    precoExemplo: true,
    imagens: ["/images/fem-blazer-branco.jpg"],
    tamanhos: TAM_ROUPA,
    cores: ["Branco"],
    disponibilidade: "consulte",
    status: "ativo",
  },

  // ------------------------------------------------ MASCULINO
  {
    id: "p33",
    nome: "Camisa Brasil Torcedor",
    slug: "camisa-brasil-torcedor",
    descricao:
      "Modelo torcedor e jogador disponíveis. Qualidade top, conforto e o visual que representa.",
    categoria: "masculino",
    marca: "Multimarcas",
    genero: "masculino",
    preco: 149.9,
    precoExemplo: true,
    imagens: ["/images/masc-camisa-brasil.jpg", "/images/masc-camisa-brasil-preta.jpg"],
    tamanhos: TAM_ROUPA,
    cores: ["Amarela", "Preta"],
    disponibilidade: "disponivel",
    maisVendido: true,
    status: "ativo",
  },
  {
    id: "p34",
    nome: "Conjunto Completo Masculino",
    slug: "conjunto-completo-masculino",
    descricao:
      "Jaqueta e calça em moletom premium preto. Conjunto completo pra montar o look inteiro de uma vez.",
    categoria: "masculino",
    marca: "Multimarcas",
    genero: "masculino",
    preco: 189.99,
    imagens: ["/images/masc-conjunto-navy.jpg"],
    tamanhos: TAM_ROUPA,
    cores: ["Preto"],
    disponibilidade: "disponivel",
    destaque: true,
    status: "ativo",
  },
  {
    id: "p35",
    nome: "Camiseta Premium Básica",
    slug: "camiseta-premium-basica",
    descricao:
      "Vários modelos e estampas com caimento perfeito. Camisetas de qualidade pra montar looks incríveis sem gastar muito.",
    categoria: "masculino",
    marca: "Multimarcas",
    genero: "masculino",
    preco: 70,
    imagens: ["/images/masc-look-preto.jpg"],
    tamanhos: TAM_ROUPA,
    cores: ["Preto", "Branco", "Estampada"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p36",
    nome: "Polo Premium Azul",
    slug: "polo-premium-azul",
    descricao:
      "Piquê encorpado com detalhes contrastantes. Do trabalho ao jantar sem trocar de roupa.",
    categoria: "masculino",
    marca: "Multimarcas",
    genero: "masculino",
    preco: 119.9,
    precoExemplo: true,
    imagens: ["/images/masc-polo-azul.jpg"],
    tamanhos: TAM_ROUPA,
    cores: ["Azul"],
    disponibilidade: "consulte",
    status: "ativo",
  },

  // ------------------------------------------------ BOLSAS
  {
    id: "p37",
    nome: "Bolsa Caramelo Estruturada",
    slug: "bolsa-caramelo-estruturada",
    descricao:
      "Couro sintético premium no tom caramelo, alça dupla e espaço pro essencial com muito estilo.",
    categoria: "bolsas",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 149.9,
    precoExemplo: true,
    imagens: ["/images/bolsa-caramelo.jpg"],
    tamanhos: ["Único"],
    cores: ["Caramelo"],
    disponibilidade: "disponivel",
    destaque: true,
    status: "ativo",
  },
  {
    id: "p38",
    nome: "Kit Bolsa Matelassê + Relógio",
    slug: "kit-bolsa-matelasse-relogio",
    descricao:
      "Kit presente: bolsa matelassê off white, carteira e relógio dourado. Pronto pra emocionar.",
    categoria: "bolsas",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 135,
    imagens: ["/images/bolsa-kit-branca.jpg"],
    tamanhos: ["Único"],
    cores: ["Off white"],
    disponibilidade: "consulte",
    status: "ativo",
  },

  // ------------------------------------------------ CHINELOS
  {
    id: "p39",
    nome: "Papete Premium Preta",
    slug: "papete-premium-preta",
    descricao:
      "Tiras cruzadas em tecido acolchoado com fivela dourada. Elegância e conforto para todos os momentos.",
    categoria: "chinelos",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 139.9,
    imagens: ["/images/chinelo-gucci-preto.jpg"],
    tamanhos: TAM_FEM,
    cores: ["Preto"],
    disponibilidade: "disponivel",
    destaque: true,
    status: "ativo",
  },
  {
    id: "p40",
    nome: "Chinelo com Corrente Dourada",
    slug: "chinelo-corrente-dourada",
    descricao:
      "Leve, confortável e com corrente dourada de destaque. Vários tons pra escolher o seu favorito.",
    categoria: "chinelos",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 39.99,
    imagens: ["/images/chinelo-corrente-cores.jpg"],
    tamanhos: ["33/34", "35/36", "37/38", "39"],
    cores: ["Rosa", "Branco", "Verde água"],
    disponibilidade: "disponivel",
    maisVendido: true,
    status: "ativo",
  },

  // ------------------------------------------------ ACESSÓRIOS
  {
    id: "p41",
    nome: "Bonés Importados",
    slug: "bones-importados",
    descricao:
      "NY, aba curva, xadrez e mais. O ponto final de qualquer look urbano.",
    categoria: "acessorios",
    marca: "Multimarcas",
    genero: "unissex",
    preco: 79.9,
    precoExemplo: true,
    imagens: ["/images/acess-bones.jpg"],
    tamanhos: ["Único"],
    cores: ["Diversas"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
  {
    id: "p42",
    nome: "Brincos Dourados",
    slug: "brincos-dourados",
    descricao:
      "Peças douradas selecionadas pra dar o toque final: argolas, corações e pedrarias.",
    categoria: "acessorios",
    marca: "Multimarcas",
    genero: "feminino",
    preco: 29.9,
    precoExemplo: true,
    imagens: ["/images/acess-brincos-dourados.jpg"],
    tamanhos: ["Único"],
    cores: ["Dourado"],
    disponibilidade: "disponivel",
    status: "ativo",
  },
];

// ---------- seleções auxiliares ----------

export const lancamentos = products.filter((p) => p.lancamento && p.status === "ativo");
export const maisVendidos = products.filter((p) => p.maisVendido && p.status === "ativo");
export const tenisDestaque = products.filter((p) => p.categoria === "tenis" && p.status === "ativo");
export const femininos = products.filter(
  (p) => p.genero === "feminino" && p.status === "ativo"
);
export const masculinos = products.filter(
  (p) => (p.genero === "masculino" || (p.genero === "unissex" && p.categoria === "tenis")) && p.status === "ativo"
);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.status === "ativo");
}

export function formatPreco(valor: number): string {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
