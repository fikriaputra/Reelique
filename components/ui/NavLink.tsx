"use client";

interface Props {
  href: string;
  title: string;
  active: boolean;
}

export default function NavLink({
  href,
  title,
  active,
}: Props) {
  return (
    <a
      href={href}
      className={`
        group
        relative
        text-base
        font-medium
        transition-all
        duration-300

        ${
          active
            ? "text-cyan-400"
            : "text-gray-300 hover:text-white"
        }
      `}
    >
      {title}

      <span
        className={`
          absolute
          -bottom-2
          left-0
          h-[2px]
          bg-cyan-400
          transition-all
          duration-300

          ${
            active
              ? "w-full"
              : "w-0 group-hover:w-full"
          }
        `}
      />
    </a>
  );
}