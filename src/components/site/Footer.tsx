import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, nav, solutions } from "@/config/site";
import { Container } from "./primitives";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-9 w-9 place-items-center rounded-xl text-sm font-extrabold text-primary-foreground"
              style={{ background: "var(--gradient-accent)" }}
              aria-hidden="true"
            >
              C
            </span>
            <span className="font-display text-lg font-extrabold">Comsystem Informática</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/65">
            Desde 1993 desenvolvendo soluções em informática para empresas, agronegócio e
            administração pública, com forte presença no norte do Mato Grosso do Sul.
          </p>
          <a
            href={company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            comsystemoficial
          </a>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-navy-foreground/50">
            Navegação
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-navy-foreground/75 transition-colors hover:text-cyan"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Soluções">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-navy-foreground/50">
            Soluções
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {solutions.map((solution) => (
              <li key={solution.id}>
                <a
                  href={solution.href}
                  className="text-navy-foreground/75 transition-colors hover:text-cyan"
                >
                  {solution.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-navy-foreground/50">
            Contato
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={company.phoneHref}
                className="flex items-center gap-2.5 text-navy-foreground/75 hover:text-cyan"
              >
                <Phone className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-navy-foreground/75 hover:text-cyan"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                {company.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
              <address className="not-italic leading-relaxed text-navy-foreground/75">
                {company.address.street}
                <br />
                {company.address.district}
                <br />
                {company.address.city} – {company.address.state}
              </address>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-navy-foreground/55 sm:flex-row">
          <p>© 2026 Comsystem. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="/politica-de-privacidade" className="hover:text-cyan">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="hover:text-cyan">
              Termos de Uso
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
