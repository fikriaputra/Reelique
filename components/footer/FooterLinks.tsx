import Link from "next/link";

interface Props {
  title: string;
  links: string[];
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
          <li key={link}>
            <Link
              href="#"
              className="
  text-sm
  md:text-base
  text-gray-400
  transition-all
  hover:text-cyan-400
"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}