import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-white py-28 sm:py-40">
      <Container className="flex flex-col items-start gap-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
          404
        </p>
        <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-black sm:text-5xl">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-grey">
          The page you&rsquo;re looking for may have been moved or removed.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href="/" variant="primary">
            Back to home
          </Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
        <Link
          href="/case-studies"
          className="mt-2 text-sm font-medium text-grey transition-colors hover:text-green"
        >
          Or browse our projects &rarr;
        </Link>
      </Container>
    </section>
  );
}
