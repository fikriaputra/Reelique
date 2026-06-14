"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Search,
  X,
} from "lucide-react";

import { useDebounce } from "use-debounce";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export default function SearchModal({
  open,
  onClose,
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
    const searchMovies =
      async () => {
        if (!debouncedQuery.trim()) {
          setMovies([]);
          return;
        }

        try {
          setLoading(true);

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

    searchMovies();
  }, [debouncedQuery]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0

        z-[100]

        bg-[#050816]
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          gap-3

          border-b
          border-white/10

          px-5
          py-4
        "
      >
        <Search
          size={20}
          className="text-cyan-400"
        />

        <input
          autoFocus
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          placeholder="Search movies..."
          className="
            flex-1

            bg-transparent

            text-white
            outline-none

            placeholder:text-gray-500
          "
        />

        <button
          onClick={onClose}
          className="
            text-gray-400
            transition-all
            hover:text-white
          "
        >
          <X size={22} />
        </button>
      </div>

      {/* Results */}
      <div className="overflow-y-auto">

        {loading && (
          <div className="p-6 text-center text-gray-400">
            <div className="space-y-4 p-4">
  {[...Array(5)].map(
    (_, index) => (
      <div
        key={index}
        className="
          flex
          gap-4
        "
      >
        <div
          className="
            h-24
            w-16

            animate-pulse
            rounded-lg

            bg-white/10
          "
        />

        <div className="flex-1">

          <div
            className="
              mb-3

              h-5
              w-2/3

              animate-pulse
              rounded

              bg-white/10
            "
          />

          <div
            className="
              h-4
              w-20

              animate-pulse
              rounded

              bg-white/10
            "
          />

        </div>
      </div>
    )
  )}
</div>
          </div>
        )}

        {!loading &&
          movies.map((movie) => (
            <Link
              key={movie.id}
              href={`/movies/${movie.id}`}
              onClick={onClose}
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
                width={70}
                height={100}
                className="rounded-lg"
              />

              <div>
                <h3 className="font-medium text-white">
                  {movie.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {movie.release_date?.split(
                    "-"
                  )[0]}
                </p>
              </div>
            </Link>
          ))}

      </div>
    </div>
  );
}