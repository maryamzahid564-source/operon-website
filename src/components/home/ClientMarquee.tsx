import Image from "next/image";
import Container from "@/components/ui/Container";
import { clients } from "@/lib/content";

// Continuously drifting strip of client logos — logo-only, consistent
// sizing, no descriptions.
export default function ClientMarquee() {
  return (
    <section className="border-y border-black/10 bg-white py-10 sm:py-12">
      <Container>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-grey">
          Trusted across the UAE
        </p>
      </Container>
      <div className="marquee mt-8 overflow-hidden">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {clients.map((c) => (
                <span key={c.slug} className="flex h-14 w-40 items-center justify-center px-4 sm:w-44">
                  <Image
                    src={`/images/clients/${c.slug}.png`}
                    alt={c.name}
                    width={200}
                    height={100}
                    className="max-h-12 w-auto max-w-full object-contain"
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
