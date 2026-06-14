import UpcomingMovieCard from "./UpcomingMovieCard";

interface Props {
  movies: any[];
}

export default function UpcomingMoviesGrid({
  movies,
}: Props) {
  return (
    <div
      className="
        grid
        gap-8

        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {movies.map((movie) => (
        <UpcomingMovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}