import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary: `
      bg-cyan-400
      text-black
      hover:bg-cyan-300
      shadow-[0_0_30px_rgba(34,211,238,0.35)]
    `,

    secondary: `
      border border-cyan-400/30
      bg-white/5
      text-white
      backdrop-blur-md
      hover:bg-cyan-400/10
    `,
  };

  return (
    <button
      className={`
        rounded-xl

        px-5 py-3
        text-sm

        sm:px-6 sm:py-3
        sm:text-base

        lg:px-8 lg:py-4

        font-semibold
        transition-all
        duration-300

        hover:-translate-y-1

        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}