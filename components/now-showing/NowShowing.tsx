import MovieCard from "./MovieCard";
import SectionHeader from "./SectionHeader";

import { getNowPlayingMovies }
from "@/services/movieServices";

export default async function NowShowing() {
  const movies =
    await getNowPlayingMovies();

  return (
    <section
      id="now-showing"
      className="relative py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
          <span className="text-cyan-400 text-sm font-medium">
            🎬 Latest Releases
          </span>
        </div>

        <SectionHeader
          title="Now Showing"
          subtitle="Movies currently playing in theaters and trending worldwide."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {movies.slice(0, 8).map((movie: any) => (
            <MovieCard
              key={movie.id}
              id={movie.id.toString()}
              title={movie.title}
              genre="Movie"
              rating={Number(
                movie.vote_average.toFixed(1)
              )}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}