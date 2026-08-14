import Image from "next/image";
import Link from "next/link";
import { photoFor } from "@/lib/images";

const slots = ["portfolio/p6", "portfolio/p5", "portfolio/p8", "portfolio/p2"];

// Full-bleed strip of portfolio photography — visual break between sections.
export default function ImageBand() {
  return (
    <Link href="/case-studies" aria-label="Explore our projects" className="group block">
      <div className="grid grid-cols-2 gap-0 md:grid-cols-4">
        {slots.map((slot) => {
          const src = photoFor(slot);
          return (
            <div key={slot} className="relative h-52 overflow-hidden bg-mist sm:h-64 lg:h-80">
              {src && (
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              )}
            </div>
          );
        })}
      </div>
    </Link>
  );
}
