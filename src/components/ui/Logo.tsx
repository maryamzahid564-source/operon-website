import Image from "next/image";

export default function Logo({
  variant = "color",
  className = "",
  iconSize = 34,
}: {
  variant?: "color" | "white";
  className?: string;
  iconSize?: number;
}) {
  const wordmarkColor = variant === "color" ? "text-green" : "text-white";
  const descriptorColor = variant === "color" ? "text-grey" : "text-white/60";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={variant === "color" ? "/images/logo-icon.png" : "/images/logo-icon-white.png"}
        alt=""
        width={iconSize}
        height={iconSize}
        className="shrink-0"
        priority
      />
      <span className="flex flex-col leading-none">
        <span className={`text-xl font-bold tracking-wide ${wordmarkColor}`}>
          OPERON<span className="align-super text-[0.5em]">&reg;</span>
        </span>
        <span className={`mt-1 text-[9px] font-medium tracking-[0.2em] ${descriptorColor}`}>
          AN EDGENTA COMPANY
        </span>
      </span>
    </span>
  );
}
