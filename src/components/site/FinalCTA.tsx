import { ArrowDown, MessageCircle, Phone } from "lucide-react";
import { company } from "@/config/site";
import { Container, Reveal } from "./primitives";

export function FinalCTA() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[32px] px-7 py-16 text-center text-navy-foreground sm:px-14"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div
              className="pointer-events-none absolute inset-0 grid-lines opacity-50"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-25 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--cyan), transparent 65%)" }}
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-[2.6rem]">
                Pronto para transformar a gestão do seu negócio?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-foreground/75">
                Converse com a equipe da Comsystem e descubra qual solução combina com a realidade
                da sua empresa.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Falar pelo WhatsApp
                </a>
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold backdrop-blur transition-colors hover:bg-white/12"
                >
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  Solicitar contato
                </a>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-navy-foreground/80 sm:flex-row sm:gap-8">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-cyan"
                >
                  <Phone className="h-4 w-4 text-cyan" aria-hidden="true" />
                  {company.phone}
                </a>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  {company.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
