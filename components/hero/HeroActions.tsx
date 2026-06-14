import Link from "next/link";

import {
  Play,
  ArrowRight,
} from "lucide-react";

interface Props {
  movie: any;
}

export default function HeroActions({
  movie,
}: Props) {
  return (
    <div
      className="
        flex
        flex-col
        gap-3

        sm:flex-row
      "
    >
      <Link
        href={`/movies/${movie.id}`}
        className="
          inline-flex
          items-center
          gap-2

          rounded-xl
          bg-cyan-400

          px-6
          py-4

          font-semibold
          text-black

          transition-all
          hover:bg-cyan-300
        "
      >
        <Play
          size={18}
          fill="currentColor"
        />
        Watch Now
      </Link>

      <Link
        href={`/movies/${movie.id}`}
        className="
          inline-flex
          items-center
          gap-2

          rounded-xl

          border border-cyan-400/30
          bg-white/5

          px-6
          py-4

          text-white

          transition-all
          hover:bg-cyan-400/10
        "
      >
        View Details
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}