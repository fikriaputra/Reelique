import {
  getMovies,
  getGenres,
} from "@/services/movieServices";

import MoviesClient from "./MoviesClient";

export default async function Movies() {
  const movies = await getMovies();
  const genres = await getGenres();

  return (
    <section
      id="movies"
      className="
        scroll-mt-24
        relative
        pt-12
        pb-24
      "
    >
      <div
        className="
          absolute
          inset-0
          -z-10
          pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
          <span className="text-sm font-medium text-cyan-400">
            🎞 Browse Collection
          </span>
        </div>

        <h2
          className="
            mb-3
            text-3xl
            font-bold
            text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          Movies
        </h2>

        <p
          className="
            mb-10
            max-w-2xl
            text-sm
            text-gray-400
            sm:text-base
            lg:text-lg
          "
        >
          Browse our complete movie
          collection by genre.
        </p>

        <MoviesClient
          movies={movies}
          genres={genres}
        />

      </div>
    </section>
  );
}