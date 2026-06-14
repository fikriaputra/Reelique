import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  movie: any;
}

export default function FeaturedUpcomingMovie({
  movie,
}: Props) {
  const releaseDate = new Date(
    movie.release_date
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border border-cyan-400/20
        bg-white/5
        backdrop-blur-md
      "
    >
      <div
        className="
          grid
          grid-cols-1

          lg:grid-cols-[400px_1fr]
        "
      >
        <div className="relative h-[450px] lg:h-full">
          <Image
            src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
            alt={movie.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-12">

          <span
            className="
              mb-4
              inline-flex
              w-fit

              rounded-full
              bg-cyan-400

              px-4
              py-2

              text-sm
              font-bold

              text-black
            "
          >
            MOST ANTICIPATED
          </span>

          <h3 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            {movie.title}
          </h3>

          <p className="mb-6 text-cyan-400">
            Release Date: {releaseDate}
          </p>

          <p className="mb-8 max-w-2xl text-gray-300">
            {movie.overview}
          </p>

          <Link
            href={`/movies/${movie.id}`}
            className="
              inline-flex
              w-fit
              items-center
              gap-2

              rounded-xl
              bg-cyan-400

              px-6
              py-3

              font-semibold
              text-black

              transition-all

              hover:bg-cyan-300
            "
          >
            View Details
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>
      </div>
    </div>
  );
}