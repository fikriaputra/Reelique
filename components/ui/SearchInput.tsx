"use client";

import {
  Search,
  X,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import { useDebounce } from "use-debounce";

interface Props {
  mobile?: boolean;
  onMobileClick?: () => void;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export default function SearchInput({
  mobile = false,
  onMobileClick,
}: Props) {
  const [query, setQuery] =
    useState("");

  const [movies, setMovies] =
    useState<Movie[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [debouncedQuery] =
    useDebounce(query, 500);

  useEffect(() => {
    const fetchMovies =
      async () => {
        if (!debouncedQuery.trim()) {
          setMovies([]);
          return;
        }

        setLoading(true);

        try {
          const response =
            await fetch(
              `/api/search?query=${debouncedQuery}`
            );

          const data =
            await response.json();

          setMovies(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchMovies();
  }, [debouncedQuery]);

  if (mobile) {
  return (
    <button
      onClick={onMobileClick}
      className="
        flex
        h-10
        w-10

        items-center
        justify-center

        rounded-full

        border
        border-white/10

        bg-white/5

        text-gray-300
      "
    >
      <Search size={18} />
    </button>
  );
}

  return (
    <div className="relative">

      {/* Search Box */}
      <div
        className="
          flex
          h-12
          w-[220px]

          lg:w-[280px]
          xl:w-[320px]

          items-center
          gap-3

          rounded-full
          border border-white/10

          bg-white/5
          px-5

          backdrop-blur-lg
        "
      >
        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          type="text"
          placeholder="Search movies..."
          className="
            w-full
            bg-transparent
            text-white
            outline-none
            placeholder:text-gray-500
          "
        />

        {query && (
          <button
            onClick={() => {
              setQuery("");
              setMovies([]);
            }}
          >
            <X
              size={16}
              className="text-gray-400"
            />
          </button>
        )}
      </div>

      {/* Results */}
      {(movies.length > 0 ||
        loading) && (
        <div
          className="
            absolute
            right-0
            top-14

            z-50

            w-[350px]

            overflow-hidden

            rounded-2xl

            border
            border-white/10

            bg-[#0B1020]

            shadow-2xl
          "
        >
          {loading && (
            <div className="p-5 text-center text-gray-400">
              Searching...
            </div>
          )}

          {!loading &&
            movies.map((movie) => (
              <Link
                key={movie.id}
                href={`/movies/${movie.id}`}
                onClick={() => {
                  setQuery("");
                  setMovies([]);
                }}
                className="
                  flex
                  gap-4

                  border-b
                  border-white/5

                  p-4

                  transition-all

                  hover:bg-white/5
                "
              >
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                      : "/placeholder.jpg"
                  }
                  alt={movie.title}
                  width={50}
                  height={75}
                  className="rounded-lg"
                />

                <div>
                  <h4 className="font-medium text-white">
                    {movie.title}
                  </h4>

                  <p className="mt-1 text-sm text-gray-400">
                    {
                      movie.release_date?.split(
                        "-"
                      )[0]
                    }
                  </p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}