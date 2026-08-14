import Image from "next/image";
import Link from "next/link";
import Parallax from "@/components/ui/Parallax";
import { photoFor } from "@/lib/images";

const slots = ["portfolio/p6", "portfolio/p5", "portfolio/p8", "portfolio/p2"];

// Full-bleed strip of portfolio photography with gentle scroll parallax —
// a visual break that moves with the reader.
export default function ImageBand() {
  return (
    <Link href="/case-studies" aria-label="Explore our projects" className="group block">
      <div className="grid grid-cols-2 gap-0 md:grid-cols-4">
        {slots.map((slot) => {
          const src = photoFor(slot);
          return (
            <div key={slot} className="relative h-56 overflow-hidden bg-mist sm:h-72 lg:h-96">
              {src && (
                <Parallax className="absolute inset-x-0 -inset-y-12">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </Parallax>
              )}
            </div>
          );
        })}
      </div>
    </Link>
  );
}
