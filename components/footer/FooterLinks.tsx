import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface Props {
  title: string;
  links: FooterLink[];
}

export default function FooterLinks({
  title,
  links,
}: Props) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-white">
        {title}
      </h3>

      <ul className="space-y-2 md:space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="
                text-sm
                md:text-base
                text-gray-400
                transition-all
                duration-300
                hover:text-cyan-400
              "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}