import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function FooterBrand() {
  return (
    <div>
      <h2 className="mb-4 text-3xl md:text-4xl font-black">
        <span className="text-cyan-400">
          Ree
        </span>
        <span className="text-white">
          Lique
        </span>
      </h2>

      <p className="max-w-sm text-sm md:text-base text-gray-400">
        Discover movies, ratings,
        trailers, and upcoming releases
        in one modern cinema platform.
      </p>

      <div className="mt-6 flex gap-4">

        <Link
          href="https://github.com/fikriaputra"
          className="
            rounded-xl
            border border-white/10
            bg-white/5
            p-3
            transition-all
            hover:border-cyan-400/30
            hover:text-cyan-400
          "
        >
          <FaGithub size={20} />
        </Link>

        <Link
          href="https://www.instagram.com/fikriaputraa_/"
          className="
            rounded-xl
            border border-white/10
            bg-white/5
            p-3
            transition-all
            hover:border-cyan-400/30
            hover:text-cyan-400
          "
        >
          <FaInstagram size={20} />
        </Link>

        <Link
          href="#"
          className="
            rounded-xl
            border border-white/10
            bg-white/5
            p-3
            transition-all
            hover:border-cyan-400/30
            hover:text-cyan-400
          "
        >
          <FaTwitter size={20} />
        </Link>

      </div>
    </div>
  );
}