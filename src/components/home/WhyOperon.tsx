import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const chain = [
  { name: "Khazanah Nasional Berhad", detail: "Malaysia's sovereign wealth fund" },
  { name: "UEM Group Berhad", detail: "Infrastructure group" },
  { name: "UEM Edgenta Berhad", detail: "Asset management & infrastructure solutions" },
  { name: "Operon Middle East", detail: "UAE facilities management" },
];

export default function WhyOperon() {
  return (
    <section className="bg-black py-24 text-white sm:py-32">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Our foundation
            </p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
              Local delivery. Global standards.
              <br />
              Institutional strength.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              Operon Middle East combines local facilities management
              expertise with the governance, engineering capability and
              international standards of UEM Edgenta, UEM Group and Khazanah
              Nasional Berhad.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 flex flex-col divide-y divide-white/10 border-t border-white/10 sm:flex-row sm:divide-x sm:divide-y-0 sm:border-t-0">
            {chain.map((c, i) => (
              <div key={c.name} className="flex-1 py-6 pr-6 sm:py-2 sm:pl-8 sm:first:pl-0">
                <span className="text-xs font-bold text-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base font-bold leading-snug">{c.name}</p>
                <p className="mt-1.5 text-sm text-white/50">{c.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
