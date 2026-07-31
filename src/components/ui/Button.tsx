import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-colors duration-200";

const variants = {
  primary: "bg-gold text-charcoal hover:bg-[#c7a473]",
  outline: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream",
  "outline-light": "border border-cream/60 text-cream hover:bg-cream hover:text-charcoal",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
