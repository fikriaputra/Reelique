import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  movie: any;
}

export default function UpcomingMovieCard({
  movie,
}: Props) {
  const releaseDate = new Date(
    movie.release_date
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="
        group

        overflow-hidden
        rounded-3xl

        border border-white/10

        bg-white/5

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-cyan-400/30
      "
    >
      <div className="relative h-[320px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          fill
          className="
            object-cover
            transition-transform
            duration-500

            group-hover:scale-110
          "
        />
      </div>

      <div className="p-5">

        <p className="mb-2 text-sm text-cyan-400">
          {releaseDate}
        </p>

        <h3 className="mb-4 line-clamp-2 text-lg font-bold text-white">
          {movie.title}
        </h3>

        <Link
          href={`/movies/${movie.id}`}
          className="
            inline-flex
            items-center
            gap-2

            text-cyan-400

            transition-all

            hover:text-cyan-300
          "
        >
          View Details
          
          <ArrowRight
            size={18}
            className="
            transition-transform
            duration-300
            group-hover:translate-x-1
            "
            />
        </Link>

      </div>
    </div>
  );
}