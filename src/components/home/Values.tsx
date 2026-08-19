import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { values } from "@/lib/content";

export default function Values() {
  return (
    <section className="bg-white py-14 sm:py-20">
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

        <Reveal delay={100}>
          {/* Official FIRST lock-up, used as supplied — not re-typeset. */}
          <Image
            src="/images/first-lockup.png"
            alt="FIRST values — Future Focused, Imagine New Ways, Respect for All, Solutioning Mindset, True to Our Word"
            width={1400}
            height={454}
            sizes="(min-width: 1024px) 760px, 100vw"
            className="mt-12 h-auto w-full max-w-3xl"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-8 border-t border-black/10 pt-10 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <Reveal key={v.letter} delay={i * 70}>
              <p className="text-sm font-bold leading-snug text-black">{v.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-grey">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
