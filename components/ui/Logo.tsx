import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1
        className="
          text-2xl
          font-extrabold

          sm:text-3xl
          lg:text-4xl
        "
      >
        <span className="text-cyan-400">
          Ree
        </span>

        <span className="text-white">
          Lique
        </span>
      </h1>
    </Link>
  );
}