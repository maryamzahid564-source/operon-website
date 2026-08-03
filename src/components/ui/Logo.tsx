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
      <Image
        src={`/images/logo-icon${suffix}.png`}
        alt=""
        width={38}
        height={38}
        className="shrink-0"
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
