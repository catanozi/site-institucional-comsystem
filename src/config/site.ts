import {
  AppWindow,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  Clock3,
  Cloud,
  DatabaseBackup,
  FileText,
  Gauge,
  Globe,
  Headset,
  Landmark,
  Layers,
  Lightbulb,
  LineChart,
  Lock,
  MapPin,
  Network,
  Repeat,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sprout,
  Store,
  Tractor,
  Truck,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

export const company = {
  name: "Comsystem Informática",
  shortName: "Comsystem",
  foundedYear: 1993,
  phone: "(67) 3291-4114",
  phoneHref: "tel:+556732914114",
  whatsapp: "https://wa.me/5567999810520",
  whatsappDisplay: "(67) 99981-0520",
  email: "sac@comsysteminformatica.com.br",
  instagram: "https://www.instagram.com/comsystemoficial/",
  website: "https://www.comsysteminformatica.com.br",
  address: {
    street: "Rua Joaquim Cardeal de Souza, nº 280",
    district: "Bairro Flávio Garcia",
    city: "Coxim",
    state: "MS",
    country: "BR",
  },
};

export const nav = [
  { label: "Início", href: "/" },
  { label: "Segmentos", href: "/segmentos" },
  { label: "Sobre a Comsystem", href: "/sobre-a-comsystem" },
  { label: "Contato", href: "/contato" },
];

export const trustBadges = [
  { icon: Clock3, label: "Desde 1993" },
  { icon: Layers, label: "Empresas e agronegócio" },
  { icon: Headset, label: "Atendimento especializado" },
];

export const advantages = [
  {
    icon: Gauge,
    title: "Mais controle",
    text: "Acompanhe cada etapa da operação com informações organizadas e sempre atualizadas.",
  },
  {
    icon: Repeat,
    title: "Menos tarefas manuais",
    text: "Automatize rotinas repetitivas e libere sua equipe para o que realmente importa.",
  },
  {
    icon: Boxes,
    title: "Informações centralizadas",
    text: "Vendas, estoque, financeiro e fiscal reunidos em um único ambiente.",
  },
  {
    icon: LineChart,
    title: "Decisões mais rápidas",
    text: "Relatórios e indicadores que mostram o cenário do negócio com clareza.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança operacional",
    text: "Processos padronizados que reduzem erros e retrabalho no dia a dia.",
  },
  {
    icon: Users,
    title: "Atendimento 24 horas",
    text: "Uma equipe que conhece a realidade regional e acompanha a sua empresa.",
  },
];

export const solutions = [
  {
    id: "gestao-empresarial",
    icon: Building2,
    title: "Gestão empresarial",
    description:
      "O SGC Comsystem reúne as ferramentas necessárias para administrar a empresa de forma eficiente.",
    items: ["Vendas e estoque", "Financeiro e administrativo", "Documentos fiscais"],
    href: "/solucoes/gestao-empresarial",
  },
  {
    id: "agronegocio",
    icon: Sprout,
    title: "Gestão para agronegócios",
    description:
      "O ComSISGA acompanha a operação administrativa, financeira e produtiva do produtor rural.",
    items: ["Custos de maquinário", "Insumos, grãos e pecuária", "Livro caixa do produtor"],
    href: "/solucoes/agronegocio",
  },
  {
    id: "gestao-tributaria",
    icon: Landmark,
    title: "Gestão tributária municipal",
    description:
      "Sistema Collect, destinado à administração tributária de municípios, com recursos para arrecadação, fiscalização, controle da dívida ativa, emissão de guias e gestão completa de tributos municipais.",
    items: ["Controle de tributos", "Processos organizados", "Rotinas automatizadas"],
    href: "/solucoes/gestao-tributaria",
  },
  {
    id: "gestao-de-protocolos",
    icon: FileText,
    title: "Gestão de Protocolos",
    description:
      "Sistema Clipdoc, desenvolvido para o gerenciamento de documentos e protocolos, permitindo o cadastro, a tramitação, o acompanhamento de processos e a organização digital de documentos.",
    items: ["Cadastro de documentos", "Tramitação e acompanhamento", "Organização digital"],
    href: "/solucoes/gestao-de-protocolos",
  },
];

export const otherServices = [
  {
    icon: AppWindow,
    title: "Desenvolvimento de Aplicativos para Gestão Empresarial",
    description:
      "Soluções personalizadas para integrar rotinas, automatizar processos e apoiar a tomada de decisões.",
  },
  {
    icon: Wrench,
    title: "Manutenção e Suporte Técnico",
    description:
      "Atendimento técnico preventivo e corretivo para manter sistemas, equipamentos e operações funcionando com estabilidade.",
  },
  {
    icon: Globe,
    title: "Desenvolvimento de Websites e Aplicações Web",
    description:
      "Desenvolvimento de sites e aplicações web responsivos, seguros e alinhados aos objetivos de cada organização.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos Mobile",
    description:
      "Aplicativos móveis personalizados, intuitivos e integrados aos processos e sistemas do negócio.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança da Informação",
    description:
      "Proteção de dados, ambientes e acessos por meio de boas práticas, prevenção de riscos e soluções de segurança.",
  },
  {
    icon: Cloud,
    title: "Computação em Nuvem",
    description:
      "Infraestrutura em nuvem segura, escalável e disponível para o armazenamento de dados e execução de aplicações.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria em TI",
    description:
      "Diagnóstico, planejamento e orientação tecnológica para aumentar a eficiência, reduzir riscos e melhorar resultados.",
  },
  {
    icon: Network,
    title: "Infraestrutura de Redes e Servidores",
    description:
      "Implantação, configuração e manutenção de redes e servidores com foco em segurança, estabilidade e desempenho.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup e Recuperação de Dados",
    description:
      "Estratégias de cópia, proteção e recuperação de dados para garantir a continuidade das operações.",
  },
];

export const sgcFeatures = [
  { icon: ShoppingCart, title: "Gestão de vendas" },
  { icon: Boxes, title: "Controle de estoque" },
  { icon: Building2, title: "Gestão administrativa" },
  { icon: Wallet, title: "Gestão financeira" },
  { icon: FileText, title: "Emissão de documentos fiscais" },
  { icon: CheckCircle2, title: "Controle de notas destinadas" },
  { icon: BarChart3, title: "Relatórios e indicadores" },
  { icon: Smartphone, title: "Acesso por diferentes dispositivos" },
  { icon: Layers, title: "Informações centralizadas" },
];

export const protocolFeatures = [
  { icon: FileText, title: "Cadastro de documentos e protocolos" },
  { icon: Repeat, title: "Tramitação organizada" },
  { icon: CheckCircle2, title: "Acompanhamento de processos" },
  { icon: Layers, title: "Organização digital de documentos" },
  { icon: ShieldCheck, title: "Mais segurança e rastreabilidade" },
  { icon: Gauge, title: "Mais agilidade nas rotinas" },
];

export const comsisgaFeatures = [
  "Controle administrativo e financeiro",
  "Gestão de custos de máquinas",
  "Controle de patrimônio",
  "Estoque de insumos",
  "Controle de grãos",
  "Controle de pecuária",
  "Pedidos de compra",
  "Controle de saldo de entrega",
  "Livro-caixa do produtor rural",
  "Acesso por dispositivos móveis",
];

export const segments = [
  {
    id: "comercio",
    querySlug: "comercio",
    icon: Store,
    label: "Comércio",
    text: "Organize vendas, estoque e obrigações fiscais em uma rotina simples e previsível, com informações reunidas em um só lugar.",
  },
  {
    id: "varejo",
    querySlug: "varejo",
    icon: ShoppingCart,
    label: "Varejo",
    text: "Agilidade no atendimento, controle do que entra e sai e visão clara do desempenho de cada operação de venda.",
  },
  {
    id: "servicos",
    querySlug: "prestadores-de-servicos",
    icon: Wrench,
    label: "Prestadores de serviços",
    text: "Controle financeiro e administrativo estruturado, com emissão de documentos e acompanhamento de resultados.",
  },
  {
    id: "distribuidoras",
    querySlug: "distribuidoras",
    icon: Truck,
    label: "Distribuidoras",
    text: "Gestão de estoque, pedidos e documentos fiscais para operações com grande volume de movimentações.",
  },
  {
    id: "agronegocio",
    querySlug: "agronegocio",
    icon: Tractor,
    label: "Agronegócio",
    text: "Custos de maquinário, patrimônio, insumos, grãos e pecuária acompanhados de perto pelo ComSISGA.",
  },
  {
    id: "produtores",
    querySlug: "produtores-rurais",
    icon: Sprout,
    label: "Produtores rurais",
    text: "Livro-caixa do produtor rural, pedidos de compra e saldo de entrega acessíveis também pelo celular.",
  },
  {
    id: "publica",
    querySlug: "administracao-publica",
    icon: Landmark,
    label: "Administração pública",
    text: "Soluções de controle e gerenciamento de tributos municipais para modernizar processos públicos.",
  },
];

export const benefits = [
  { icon: Layers, title: "Gestão centralizada" },
  { icon: LineChart, title: "Informações em tempo real" },
  { icon: Gauge, title: "Mais produtividade" },
  { icon: ShieldCheck, title: "Redução de erros" },
  { icon: Repeat, title: "Processos automatizados" },
  { icon: Cloud, title: "Acesso de qualquer lugar" },
  { icon: Headset, title: "Suporte especializado" },
  { icon: Lock, title: "Tecnologia adaptada ao negócio" },
];

export const timeline = [
  { year: "1993", title: "Fundação da Comsystem" },
  { year: "—", title: "Expansão das soluções de gestão" },
  { year: "—", title: "Desenvolvimento de sistemas especializados" },
  { year: "—", title: "Plataformas acessíveis também em dispositivos móveis" },
  {
    year: "Hoje",
    title: "Tecnologia para empresas, agronegócios e administração pública",
  },
];

export const supportPoints = [
  "Equipe especializada",
  "Atendimento 24 horas",
  "Implantação orientada",
  "Suporte para utilização dos sistemas",
  "Conhecimento da realidade regional",
  "Relacionamento de longo prazo",
];

export const interestOptions = [
  "SGC — Gestão empresarial",
  "ComSISGA — Agronegócio",
  "Collect — Gestão tributária municipal",
  "Clipdoc — Gestão de Protocolos",
  "Ainda não sei",
];

export const segmentOptions = segments.map((s) => s.label);

export const segmentOptionByQuery = Object.fromEntries(
  segments.map((segment) => [segment.querySlug, segment.label]),
) as Record<string, string>;

export const interestOptionByQuery: Record<string, string> = {
  "gestao-empresarial": "SGC — Gestão empresarial",
  comsisga: "ComSISGA — Agronegócio",
  "gestao-tributaria": "Collect — Gestão tributária municipal",
  clipdoc: "Clipdoc — Gestão de Protocolos",
};

export const contactIcons = { MapPin };
