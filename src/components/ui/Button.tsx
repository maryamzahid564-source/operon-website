import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-200";

const variants = {
  primary: "bg-green text-white hover:bg-[#488f48]",
  outline: "border border-black text-black hover:bg-black hover:text-white",
  "outline-light": "border border-white text-white hover:bg-white hover:text-black",
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
