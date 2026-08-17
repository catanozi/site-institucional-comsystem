import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { company, nav } from "@/config/site";
import { Container } from "./primitives";
import logo from "@/assets/logo-comsystem2.png";

function Logo() {
  return (
    <a href="/" className="flex items-center" aria-label="Comsystem Informática — início">
      <img src={logo} alt="Comsystem Informática" className="h-9 w-auto sm:h-10" />
    </a>
  );
}

export function Header({ solidAtTop = false }: { solidAtTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = !solidAtTop && !scrolled;
  const headerNav = nav.filter((item) => item.href !== "/contato");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        inverted
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/90 backdrop-blur-xl shadow-[0_8px_30px_-20px_oklch(0.24_0.075_258_/_0.5)]",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {headerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold transition-colors",
                inverted
                  ? "text-navy-foreground/80 hover:bg-white/10 hover:text-navy-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/contato"
            className="hidden rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_10px_24px_-12px_oklch(0.44_0.145_254_/_0.9)] transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
            style={{ background: "var(--gradient-accent)" }}
          >
            Falar com um especialista
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-xl border transition-colors lg:hidden",
              inverted
                ? "border-white/20 text-navy-foreground hover:bg-white/10"
                : "border-border text-foreground hover:bg-secondary",
            )}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-navy-deep text-navy-foreground transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/20 hover:bg-white/10"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <nav
          aria-label="Navegação mobile"
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 pb-8 pt-4 sm:px-8"
        >
          {headerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-display text-2xl font-bold tracking-tight"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contato"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold text-primary-foreground"
            style={{ background: "var(--gradient-accent)" }}
          >
            Falar com um especialista
          </a>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-4 text-base font-bold"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
