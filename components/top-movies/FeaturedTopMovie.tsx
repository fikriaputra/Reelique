import Image from "next/image";
import Link from "next/link";

import {
  Star,
  Calendar,
  ArrowRight,
} from "lucide-react";

import RankingBadge from "./RankingBadge";
import { TMDBMovie } from "@/types/movie";

interface Props {
  rank: number;
  movie: TMDBMovie;
}

export default function FeaturedTopMovie({
  rank,
  movie,
}: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-md
      "
    >
      <div
        className="
          relative
          h-[260px]
          sm:h-[320px]
          lg:h-[420px]
        "
      >
        <RankingBadge rank={rank} />

        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#050816]
            via-[#050816]/40
            to-transparent
          "
        />
      </div>

      <div className="p-6">
        <h3 className="mb-4 text-2xl font-bold md:text-3xl text-white">
          {movie.title}
        </h3>

        <div className="mb-4 flex flex-wrap gap-5 text-sm">
          <div className="flex items-center gap-2 text-cyan-400">
            <Star size={16} fill="currentColor" />
            <span>
              {movie.vote_average.toFixed(1)}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <Calendar size={16} />
            <span>
              {new Date(
                movie.release_date
              ).getFullYear()}
            </span>
          </div>
        </div>

        <p
          className="
            mb-6
            line-clamp-3
            text-gray-400
          "
        >
          {movie.overview}
        </p>

        <Link
          href={`/movies/${movie.id}`}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-cyan-400
            px-5
            py-3
            font-semibold
            text-black
            transition-all
            hover:bg-cyan-300
          "
        >
          View Details
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}