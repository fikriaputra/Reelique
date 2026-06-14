import FeaturedUpcomingMovie from "./FeaturedUpcomingMovie";
import UpcomingMoviesGrid from "./UpcomingMoviesGrid";

import { getUpcomingMovies } from "@/services/movieServices";

export default async function ComingSoon() {
  const movies = await getUpcomingMovies();

  const featuredMovie = movies[0];
  const remainingMovies = movies.slice(1, 5);

  return (
    <section
      id="coming-soon"
      className="scroll-mt-24 relative pt-12 pb-24"
    >
      <div
        className="
          absolute
          inset-0
          -z-10
          pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_60%)]
        "
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
          <span className="text-sm font-medium text-cyan-400">
            🚀 Upcoming Releases
          </span>
        </div>

        <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Coming Soon
        </h2>

        <p className="mb-12 max-w-2xl text-sm text-gray-400 sm:text-base lg:text-lg">
          Discover the most anticipated movies arriving in the coming months.
        </p>

        <FeaturedUpcomingMovie
          movie={featuredMovie}
        />

        <h3 className="mt-16 mb-8 text-2xl font-bold text-white">
          More Upcoming Movies
        </h3>

        <UpcomingMoviesGrid
          movies={remainingMovies}
        />

      </div>
    </section>
  );
}