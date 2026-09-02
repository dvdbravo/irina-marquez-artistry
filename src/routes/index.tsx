import { createFileRoute } from "@tanstack/react-router";

import hero from "@/assets/hero.jpg";
import obraSal from "@/assets/obra-sal.jpg";
import obraSirena from "@/assets/obra-sirena.jpg";
import obraVisitantes from "@/assets/obra-visitantes.jpg";
import obraMonolitos from "@/assets/obra-monolitos.jpg";
import retrato from "@/assets/retrato.jpg";

const TITLE = "Irina Márquez — Diseñadora, fotógrafa y artista visual";
const DESCRIPTION =
  "Fotografía, diseño de modas y collage desde una mirada crítica y poética sobre el cuerpo y la belleza femenina.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#obra", label: "Obra" },
  { href: "#acerca", label: "Acerca" },
  { href: "#contacto", label: "Contacto" },
];

function Index() {
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full px-6 py-8 mix-blend-difference lg:px-12">
        <div className="mx-auto flex max-w-7xl items-end justify-between font-sans text-[10px] tracking-[0.25em] uppercase text-paper">
          <a href="#inicio" className="font-medium">
            Irina Márquez
          </a>
          <div className="flex gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-oxide">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="bg-paper text-lead selection:bg-oxide/20">
        {/* Hero */}
        <section
          id="inicio"
          className="relative flex h-screen w-full items-center justify-center overflow-hidden p-6"
        >
          <img
            src={hero}
            alt="Mujer con vestido blanco escultórico en una playa rocosa al atardecer"
            width={1920}
            height={1088}
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
          <div className="relative z-10 text-center text-paper mix-blend-difference">
            <h1 className="mb-8 animate-reveal font-serif text-5xl font-medium leading-none text-balance md:text-7xl lg:text-9xl">
              Irina Márquez
            </h1>
            <p className="mx-auto max-w-[40ch] font-sans text-sm tracking-widest uppercase opacity-80 text-balance md:text-base">
              Fotografía, diseño y collage desde una mirada crítica sobre el cuerpo y la belleza.
            </p>
          </div>
        </section>

        {/* Narrative intro */}
        <section className="px-6 py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="mb-8 font-serif text-3xl font-medium leading-tight text-balance md:text-4xl lg:text-5xl">
                La belleza como acto de resistencia en el paisaje liminal de la frontera.
              </h2>
              <p className="max-w-[56ch] font-sans text-base text-lead/80 text-pretty">
                Mi trabajo explora la intersección entre la moda escultórica y el surrealismo
                analógico. A través de la lente, documento cuerpos que habitan espacios oníricos,
                donde la vestimenta no es adorno, sino una extensión de la psique y un diálogo con
                lo inexplicable.
              </p>
            </div>
            <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
              <a
                href="#obra"
                className="group flex w-fit items-center gap-4 rounded-full py-2 pr-3 pl-2 ring-1 ring-oxide/20 transition-colors hover:bg-oxide/5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-oxide font-sans text-[10px] text-paper">
                  ↓
                </span>
                <span className="font-sans text-sm tracking-wide text-oxide uppercase">
                  Ver Series
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Collage grid */}
        <section id="obra" className="scroll-mt-12 px-6 pb-32 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
              <article className="group relative md:col-span-8">
                <div className="overflow-hidden rounded-[min(1vw,12px)] shadow-sm ring-1 ring-lead/5">
                  <img
                    src={obraSal}
                    alt="Retrato surrealista de mujer con múltiples brazos sosteniendo seda blanca"
                    loading="lazy"
                    width={1200}
                    height={1600}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="font-serif text-xl font-medium">Vestigios de Sal</h3>
                  <span className="font-sans text-[10px] tracking-tighter text-lead/50 uppercase">
                    Fotografía &amp; Moda
                  </span>
                </div>
              </article>

              <article className="collage-hover group relative md:col-span-4 md:mt-32">
                <div className="overflow-hidden rounded-[min(1vw,12px)] shadow-sm ring-1 ring-lead/5">
                  <img
                    src={obraSirena}
                    alt="Collage analógico de cactus vintage y fotografía de moda"
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-xl font-medium">El Vuelo de la Sirena</h3>
                  <p className="mt-2 max-w-[28ch] font-sans text-xs text-lead/60 text-pretty">
                    Una exploración sobre el mito y la metamorfosis del cuerpo femenino.
                  </p>
                </div>
              </article>

              <article className="group relative md:col-span-5 md:-mt-20">
                <div className="overflow-hidden rounded-[min(1vw,12px)] shadow-sm ring-1 ring-lead/5">
                  <img
                    src={obraVisitantes}
                    alt="Mujer con sombrero blanco estructural en forma de platillo volador"
                    loading="lazy"
                    width={1000}
                    height={1200}
                    className="aspect-[5/6] w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-xl font-medium">Visitantes del Crepúsculo</h3>
                </div>
              </article>

              <article className="group relative md:col-span-7">
                <div className="overflow-hidden rounded-[min(1vw,12px)] shadow-sm ring-1 ring-lead/5">
                  <img
                    src={obraMonolitos}
                    alt="Dos mujeres con vestidos blancos escultóricos sentadas sobre una roca"
                    loading="lazy"
                    width={1400}
                    height={800}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <h3 className="font-serif text-xl font-medium">Monolitos Vivos</h3>
                  <span className="font-sans text-[10px] font-medium text-oxide uppercase">
                    Colección 2026
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="acerca" className="bg-lead px-6 py-32 text-paper lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
            <div className="relative">
              <img
                src={retrato}
                alt="Retrato en blanco y negro de Irina Márquez"
                loading="lazy"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full rounded-[min(1vw,12px)] object-cover ring-1 ring-paper/10"
              />
              <div className="absolute -right-6 -bottom-6 h-48 w-48 rounded-full bg-oxide opacity-50 mix-blend-overlay blur-3xl" />
            </div>
            <div>
              <h4 className="mb-6 font-sans text-[10px] tracking-[0.3em] text-oxide uppercase">
                Sobre la artista
              </h4>
              <h2 className="mb-10 font-serif text-4xl font-medium leading-tight text-balance lg:text-5xl">
                Cuestionando la mirada tradicional a través del collage y la materia.
              </h2>
              <div className="max-w-[48ch] space-y-6 font-sans text-base leading-relaxed text-paper/70 text-pretty">
                <p>
                  Irina Márquez es una diseñadora de modas, fotógrafa y artista visual mexicana cuya
                  práctica transita entre la moda y la imagen onírica. Su obra ha sido descrita como
                  un fanzine surrealista impreso en la memoria, donde el cuerpo femenino se convierte
                  en el lienzo de una narrativa crítica sobre los estándares de belleza.
                </p>
                <p>
                  Utilizando técnicas de collage analógico y diseño textil escultórico, Irina
                  construye mundos donde lo cotidiano se quiebra para dar paso a lo extraordinario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contacto" className="border-t border-border px-6 py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row md:items-center">
            <div>
              <p className="mb-2 font-serif text-2xl font-medium text-oxide">Irina Márquez</p>
              <p className="font-sans text-[10px] tracking-widest text-lead/40 uppercase">
                © 2026 — Obra protegida
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] tracking-widest text-lead/40 uppercase">
                Contacto
              </span>
              <a
                href="mailto:hola@irinamarquez.com"
                className="font-serif text-xl underline decoration-oxide/30 underline-offset-4 transition-colors hover:text-oxide"
              >
                hola@irinamarquez.com
              </a>
            </div>
            <div className="flex gap-8">
              {["Instagram", "Behance", "Vimeo"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-sans text-[10px] tracking-widest uppercase transition-colors hover:text-oxide"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
