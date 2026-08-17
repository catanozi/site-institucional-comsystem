import { Check } from "lucide-react";
import supportImg from "@/assets/support.jpg";
import { supportPoints } from "@/config/site";
import { Container, Reveal, SectionTag } from "./primitives";

export function Support() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionTag>Atendimento</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
              Tecnologia eficiente com atendimento de verdade
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Sistema bom é aquele que a equipe sabe usar. Por isso, acompanhamos a implantação,
              orientamos o uso e seguimos por perto depois que tudo entra no ar.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {supportPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <div className="overflow-hidden rounded-[28px] border border-border shadow-[var(--shadow-lift)]">
              <img
                src={supportImg}
                alt="Equipe de suporte da Comsystem atendendo clientes em escritório"
                width={1408}
                height={1008}
                loading="lazy"
                className="w-full"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
