import TopMovieCard from "./TopMovieCard";
import { TMDBMovie } from "@/types/movie";

interface Props {
  movies: TMDBMovie[];
}

export default function TopMovieGrid({
  movies,
}: Props) {
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
      {movies.map((movie, index) => (
        <TopMovieCard
          key={movie.id}
          rank={index + 3}
          movie={movie}
        />
      ))}
    </div>
  );
}