import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-colors duration-200";

const variants = {
  primary: "bg-green text-white hover:bg-[#488f48]",
  outline: "border border-black/20 text-black hover:border-black hover:bg-black hover:text-white",
  "outline-light": "border border-white/40 text-white hover:bg-white hover:text-black",
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
