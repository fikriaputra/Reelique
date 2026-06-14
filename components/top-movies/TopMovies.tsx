import FeaturedTopMovie from "./FeaturedTopMovie";
import TopMovieGrid from "./TopMovieGrid";

import { getPopularMovies } from "@/services/movieServices";

export default async function TopMovies() {
  const movies = await getPopularMovies();

  const topOne = movies[0];
  const topTwo = movies[1];

  const remainingMovies = movies.slice(2, 6);

  return (
    <section
      id="top-movies"
      className="scroll-mt-24 relative pt-12 pb-24"
    >
      <div
        className="
          absolute
          inset-0
          -z-10
          pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_60%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-3 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2">
          <span className="text-sm font-medium text-yellow-400">
            🔥 Most Popular Movies
          </span>
        </div>

        <h2
          className="
            mb-3
            text-3xl
            font-bold
            sm:text-4xl
            lg:text-5xl
            text-white
          "
        >
          Popular Movies
        </h2>

        <p
          className="
            mb-12
            max-w-2xl
            text-sm
            text-gray-400
            sm:text-base
            lg:text-lg
          "
        >
          Discover the most popular movies trending worldwide.
        </p>

        {/* TOP 1 & TOP 2 */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <FeaturedTopMovie
            rank={1}
            movie={topOne}
          />

          <FeaturedTopMovie
            rank={2}
            movie={topTwo}
          />
        </div>

        {/* TOP 3 - 6 */}
        <TopMovieGrid
          movies={remainingMovies}
        />

      </div>
    </section>
  );
}