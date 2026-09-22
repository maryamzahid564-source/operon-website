import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { groupStats, groupStatsNote } from "@/lib/content";
import { photoFor } from "@/lib/images";

// The backing behind Operon, told as a layered "backed by" journey rather
// than an organisation chart — Operon leads, each layer recedes.
const backing = [
  { name: "UEM Edgenta Berhad", detail: "Asset management & infrastructure solutions" },
  { name: "UEM Group Berhad", detail: "Infrastructure group" },
  { name: "Khazanah Nasional Berhad", detail: "Malaysia's sovereign wealth fund" },
];

export default function WhyOperon() {
  const bg = photoFor("group-skyline") ?? photoFor("portfolio/p5");

  return (
    <section className="relative overflow-hidden bg-black py-14 text-white sm:py-20">
      {bg && (
        <Image
          src={bg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />

      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="mb-5 block h-0.5 w-10 bg-green" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Our foundation
            </p>
            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Local delivery. Global standards.
              <br />
              Institutional strength.
            </h2>
          </div>
        </Reveal>

        {/* Operon out front; its backing recedes behind it, layer by layer. */}
        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">
          <Reveal className="lg:w-[34%]">
            <div className="flex h-full flex-col justify-between border-l-2 border-green bg-white/[0.07] p-7 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                UAE facilities management
              </p>
              <div className="mt-10">
                <p className="text-2xl font-bold leading-tight sm:text-3xl">
                  Operon
                  <br />
                  Middle East
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  On the ground across the UAE &mdash; one team, one standard,
                  since 2008.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex items-center justify-center py-1 lg:w-[6%] lg:py-0">
            <div className="flex items-center gap-2 text-white/50 lg:rotate-0">
              <span className="hidden h-px w-6 bg-white/30 lg:block" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Backed by
              </span>
              <span className="h-px w-6 bg-white/30 lg:hidden" />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:gap-0">
            {backing.map((b, i) => (
              <Reveal key={b.name} delay={140 + i * 120} className="flex-1">
                <div
                  className="flex h-full flex-col justify-between border-l border-white/20 p-6 sm:p-5 lg:p-6"
                  style={{ opacity: 1 - i * 0.14 }}
                >
                  <span className="text-xs font-bold text-green/90">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-8">
                    <p className="text-base font-bold leading-snug">{b.name}</p>
                    <p className="mt-2 text-sm leading-snug text-white/60">{b.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150}>
          <div className="mt-12 border-t border-white/15 pt-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {groupStats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold tracking-tight text-green sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-white/60 sm:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-xs leading-relaxed text-white/45">
              {groupStatsNote}
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-12 border-t border-white/15 pt-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
              The FIRST values guide every team we field
            </p>
            <Image
              src="/images/first-lockup-white.png"
              alt="FIRST values — Future Focused, Imagine New Ways, Respect for All, Solutioning Mindset, True to Our Word"
              width={1400}
              height={454}
              sizes="(min-width: 640px) 560px, 100vw"
              className="mt-8 h-auto w-full max-w-xl"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
