import Image from "next/image";
import MovieInfo from "./MovieInfo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface MovieDetailProps {
  movie: any;
  cast: any[];
  trailerKey?: string;
}

export default function MovieDetail({
  movie,
  cast,
  trailerKey,
}: MovieDetailProps) {
  return (
    <section
      id="movie-detail"
      className="
        relative
        min-h-screen

        pt-24
        md:pt-28
        lg:pt-24
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0

          -z-10
          pointer-events-none

          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl

          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Back Button */}
        <Link
          href="/"
          className="
            mb-6
            mt-2

            inline-flex
            items-center
            gap-2

            rounded-xl

            border
            border-white/10

            bg-white/5

            px-4
            py-2.5

            text-sm
            text-gray-300

            backdrop-blur-md

            transition-all
            duration-300

            hover:border-cyan-400/30
            hover:text-cyan-400
          "
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        {/* Content */}
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-8

            lg:grid-cols-[380px_1fr]
            xl:grid-cols-[420px_1fr]

            lg:gap-14
          "
        >
          {/* Poster */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={450}
              height={650}
              priority
              className="
                w-[220px]

                rounded-3xl
                shadow-2xl

                sm:w-[280px]
                md:w-[320px]
                lg:w-[380px]
                xl:w-[420px]
              "
            />
          </div>

          {/* Movie Info */}
          <MovieInfo
  title={movie.title}
  genre={
    movie.genres?.[0]?.name ??
    "Movie"
  }
  rating={Number(
    movie.vote_average?.toFixed(1)
  )}
  year={new Date(
    movie.release_date
  ).getFullYear()}
  duration={`${movie.runtime} min`}
  description={movie.overview}
  cast={cast}
  trailerKey={trailerKey}
/>
        </div>
      </div>
    </section>
  );
}