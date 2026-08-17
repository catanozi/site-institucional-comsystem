import { useEffect, type ReactNode } from "react";
import { About } from "@/components/site/About";
import { Benefits } from "@/components/site/Benefits";
import { ComSISGASection } from "@/components/site/ComSISGASection";
import { ContactForm } from "@/components/site/ContactForm";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { MunicipalTax } from "@/components/site/MunicipalTax";
import { ProtocolSection } from "@/components/site/ProtocolSection";
import { SGCSection } from "@/components/site/SGCSection";
import { Segments } from "@/components/site/Segments";
import { Solutions } from "@/components/site/Solutions";
import { Support } from "@/components/site/Support";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Container, SectionTag } from "@/components/site/primitives";

const titles: Record<string, string> = {
  "/": "Comsystem Informática | Soluções completas em tecnologia",
  "/segmentos": "Segmentos atendidos | Comsystem Informática",
  "/sobre-a-comsystem": "Sobre a Comsystem | Comsystem Informática",
  "/contato": "Contato | Comsystem Informática",
  "/solucoes/gestao-empresarial": "SGC — Gestão empresarial | Comsystem Informática",
  "/solucoes/agronegocio": "ComSISGA — Gestão para agronegócios | Comsystem Informática",
  "/solucoes/gestao-tributaria": "Collect — Gestão tributária municipal | Comsystem Informática",
  "/solucoes/gestao-de-protocolos": "Clipdoc — Gestão de Protocolos | Comsystem Informática",
  "/politica-de-privacidade": "Política de Privacidade | Comsystem Informática",
  "/termos-de-uso": "Termos de Uso | Comsystem Informática",
};

function normalizePath(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "") || "/";
}

function InternalMain({ children }: { children: ReactNode }) {
  return <main className="pt-[72px]">{children}</main>;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Solutions />
      <FinalCTA />
    </main>
  );
}

function SegmentsPage() {
  return (
    <InternalMain>
      <Segments />
      <Benefits />
    </InternalMain>
  );
}

function AboutPage() {
  return (
    <InternalMain>
      <Intro />
      <About />
      <Support />
    </InternalMain>
  );
}

function ContactPage() {
  return (
    <InternalMain>
      <ContactForm />
    </InternalMain>
  );
}

function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy";

  return (
    <InternalMain>
      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <div className="surface-card mx-auto max-w-3xl p-8 sm:p-12">
            <SectionTag>{privacy ? "Privacidade" : "Termos"}</SectionTag>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
              {privacy ? "Política de Privacidade" : "Termos de Uso"}
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {privacy ? (
                <>
                  <p>
                    A Comsystem utiliza os dados enviados pelos canais de contato exclusivamente
                    para responder solicitações, apresentar soluções e prestar atendimento.
                  </p>
                  <p>
                    Para solicitar informações sobre dados pessoais ou exercer direitos relacionados
                    à privacidade, entre em contato pelo e-mail institucional indicado no rodapé do
                    site.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    As informações deste site possuem caráter institucional e apresentam as soluções
                    e os serviços oferecidos pela Comsystem.
                  </p>
                  <p>
                    Condições comerciais, escopo de implantação, suporte e demais obrigações serão
                    definidos nos instrumentos específicos firmados com cada cliente.
                  </p>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
    </InternalMain>
  );
}

function NotFoundPage() {
  return (
    <InternalMain>
      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <div className="surface-card mx-auto max-w-2xl p-8 text-center sm:p-12">
            <SectionTag>404</SectionTag>
            <h1 className="mt-5 font-display text-3xl font-extrabold">Página não encontrada</h1>
            <p className="mt-4 text-muted-foreground">
              O endereço acessado não existe ou foi alterado.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex rounded-full px-7 py-4 text-sm font-bold text-primary-foreground"
              style={{ background: "var(--gradient-accent)" }}
            >
              Voltar ao início
            </a>
          </div>
        </Container>
      </section>
    </InternalMain>
  );
}

function renderRoute(path: string) {
  switch (path) {
    case "/":
      return <HomePage />;
    case "/segmentos":
      return <SegmentsPage />;
    case "/sobre-a-comsystem":
      return <AboutPage />;
    case "/contato":
      return <ContactPage />;
    case "/solucoes/gestao-empresarial":
      return (
        <InternalMain>
          <SGCSection />
        </InternalMain>
      );
    case "/solucoes/agronegocio":
      return (
        <InternalMain>
          <ComSISGASection />
        </InternalMain>
      );
    case "/solucoes/gestao-tributaria":
      return (
        <InternalMain>
          <MunicipalTax />
        </InternalMain>
      );
    case "/solucoes/gestao-de-protocolos":
      return (
        <InternalMain>
          <ProtocolSection />
        </InternalMain>
      );
    case "/politica-de-privacidade":
      return <LegalPage type="privacy" />;
    case "/termos-de-uso":
      return <LegalPage type="terms" />;
    default:
      return <NotFoundPage />;
  }
}

export default function App() {
  const path = normalizePath(window.location.pathname);
  const isHome = path === "/";

  useEffect(() => {
    document.title = titles[path] ?? "Página não encontrada | Comsystem Informática";

    const hash = window.location.hash.slice(1);
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [path]);

  return (
    <div className="min-h-screen bg-background">
      <Header solidAtTop={!isHome} />
      {renderRoute(path)}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
