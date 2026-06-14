import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import RankingBadge from "./RankingBadge";
import { TMDBMovie } from "@/types/movie";

interface Props {
  rank: number;
  movie: TMDBMovie;
}

export default function TopMovieCard({
  rank,
  movie,
}: Props) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="
        group
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        transition-all duration-300
        hover:border-cyan-400/30
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >
      <div
        className="
          relative
          h-[260px]
          sm:h-[320px]
          lg:h-[360px]
        "
      >
        <RankingBadge rank={rank} />

        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          fill
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-base md:text-lg font-semibold text-white">
          {movie.title}
        </h3>

        <div className="flex items-center justify-between">

          <span className="text-sm text-gray-400">
            {new Date(
              movie.release_date
            ).getFullYear()}
          </span>

          <div className="flex items-center gap-1 text-cyan-400">
            <Star
              size={14}
              fill="currentColor"
            />
            {movie.vote_average.toFixed(1)}
          </div>

        </div>
      </div>
    </Link>
  );
}