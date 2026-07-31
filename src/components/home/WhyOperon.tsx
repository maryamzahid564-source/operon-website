import Container from "@/components/ui/Container";

const pillars = [
  {
    figure: "80+",
    title: "Group heritage",
    body: "Decades of operational discipline from a group with a diversified regional footprint, applied to every asset we manage.",
  },
  {
    figure: "2008",
    title: "Local expertise",
    body: "Operating across the UAE since 2008, with an on-the-ground understanding of Dubai's regulatory and climate demands.",
  },
  {
    figure: "100+",
    title: "Scale & reach",
    body: "A portfolio spanning residential, commercial, retail and leisure assets, managed to a single, consistent standard.",
  },
];

export default function WhyOperon() {
  return (
    <section className="bg-charcoal py-24 text-cream sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Why Operon
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            Built for owners who measure everything.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="border-t border-cream/15 pt-6">
              <p className="font-serif text-4xl text-gold">{p.figure}</p>
              <h3 className="mt-4 text-lg font-medium text-cream">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
