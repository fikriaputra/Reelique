"use client";

import { useMemo, useState } from "react";

import GenreFilter from "./GenreFilter";
import MoviesGrid from "./MoviesGrid";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
}

interface Props {
  movies: Movie[];
  genres: Genre[];
}

export default function MoviesClient({
  movies,
  genres,
}: Props) {
  const [selectedGenre, setSelectedGenre] =
    useState("All");

  const genreNames = [
    "All",
    ...genres.map(
      (genre) => genre.name
    ),
  ];

  const filteredMovies =
    useMemo(() => {
      if (selectedGenre === "All") {
        return movies;
      }

      const genreId =
        genres.find(
          (genre) =>
            genre.name === selectedGenre
        )?.id;

      return movies.filter(
        (movie) =>
          movie.genre_ids.includes(
            genreId as number
          )
      );
    }, [
      selectedGenre,
      movies,
      genres,
    ]);

  return (
    <>
      <GenreFilter
        genres={genreNames}
        selectedGenre={selectedGenre}
        onSelectGenre={
          setSelectedGenre
        }
      />

      <MoviesGrid
        movies={filteredMovies}
      />
    </>
  );
}