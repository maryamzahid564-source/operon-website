import Image from "next/image";

// Renders the official logo artwork (icon + wordmark band cropped from the
// approved files) — the wordmark is never re-typeset, per brand guidelines.
export default function Logo({
  variant = "color",
  className = "",
}: {
  variant?: "color" | "white";
  className?: string;
}) {
  const suffix = variant === "white" ? "-white" : "";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* Fixed height, auto width: the colour (512x492) and white (512x511)
          artwork have different intrinsic ratios, and neither is square —
          letting the browser derive width keeps the mark undistorted. */}
      <Image
        src={`/images/logo-icon${suffix}.png`}
        alt=""
        width={256}
        height={246}
        className="h-[38px] w-auto shrink-0"
        priority
      />
      <Image
        src={`/images/logo-wordmark${suffix}.png`}
        alt="Operon — An Edgenta Company"
        width={144}
        height={31}
        priority
      />
    </span>
  );
}
