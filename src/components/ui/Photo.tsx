import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

// Renders a real photo when src is provided, else the standard grey
// placeholder block. src comes from photoFor() resolved server-side.
export default function Photo({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
  sizes,
  priority = false,
}: {
  src: string | null;
  alt: string;
  aspect?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!src) {
    return <ImagePlaceholder aspect={aspect} className={className} />;
  }
  return (
    <div className={`relative w-full overflow-hidden ${aspect} ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
