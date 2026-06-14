import MovieCard from "../now-showing/MovieCard";

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
}

interface MoviesGridProps {
  movies: Movie[];
}

export default function MoviesGrid({
  movies,
}: MoviesGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-8
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          genre="Movie"
          rating={Number(
            movie.vote_average.toFixed(1)
          )}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  );
}