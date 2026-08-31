import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { groupStats, groupStatsNote } from "@/lib/content";
import { photoFor } from "@/lib/images";

const chain = [
  { name: "Khazanah Nasional Berhad", detail: "Malaysia's sovereign wealth fund" },
  { name: "UEM Group Berhad", detail: "Infrastructure group" },
  { name: "UEM Edgenta Berhad", detail: "Asset management & infrastructure solutions" },
  { name: "Operon Middle East", detail: "UAE facilities management" },
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
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Operon Middle East combines local facilities management
              expertise with the governance, engineering capability and
              international standards of UEM Edgenta, UEM Group and Khazanah
              Nasional Berhad.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col divide-y divide-white/15 border-t border-white/15 sm:flex-row sm:divide-x sm:divide-y-0 sm:border-t-0">
            {chain.map((c, i) => (
              <div key={c.name} className="flex-1 py-6 pr-6 sm:py-2 sm:pl-8 sm:first:pl-0">
                <span className="text-xs font-bold text-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base font-bold leading-snug">{c.name}</p>
                <p className="mt-1.5 text-sm text-white/60">{c.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

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
