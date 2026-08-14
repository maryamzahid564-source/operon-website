import Container from "@/components/ui/Container";
import { clients } from "@/lib/content";

// Continuously drifting strip of client names — subtle, constant motion.
export default function ClientMarquee() {
  return (
    <section className="border-y border-black/10 bg-white py-10 sm:py-12">
      <Container>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-grey">
          Trusted across the UAE
        </p>
      </Container>
      <div className="marquee mt-7 overflow-hidden">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {clients.map((c) => (
                <span
                  key={c}
                  className="whitespace-nowrap px-8 text-xl font-bold tracking-tight text-black/35 sm:px-10 sm:text-2xl"
                >
                  {c}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
