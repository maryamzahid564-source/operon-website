import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { values } from "@/lib/content";

export default function Values() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Our values
            </p>
            <h2 className="mt-5 text-2xl font-bold leading-tight text-black sm:text-3xl tracking-tight">
              Guided by UEM Edgenta&rsquo;s FIRST values.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-5">
          {values.map((v, i) => (
            <Reveal key={v.letter} delay={i * 70}>
              <div className="border-t-2 border-green pt-5">
                <span className="text-3xl font-black text-green tracking-tight">{v.letter}</span>
                <p className="mt-3 text-sm font-bold leading-snug text-black">
                  {v.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
