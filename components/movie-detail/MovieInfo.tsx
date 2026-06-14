"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Star,
  Calendar,
  Clock,
  Film,
  Play,
} from "lucide-react";

import TrailerModal from "./TrailerModal";

interface MovieInfoProps {
  title: string;
  genre: string;
  rating: number;
  year: number;
  duration: string;
  description: string;
  trailerKey?: string;

  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }[];
}

export default function MovieInfo({
  title,
  genre,
  rating,
  year,
  duration,
  description,
  cast,
  trailerKey,
}: MovieInfoProps) {
  const [isTrailerOpen, setIsTrailerOpen] =
    useState(false);

  return (
    <div className="flex flex-col">

      <h1
        className="
          mb-5
          text-3xl
          font-black
          text-white
          sm:text-4xl
          md:text-5xl
          xl:text-7xl
        "
      >
        {title}
      </h1>

      <div
        className="
          mb-6
          flex flex-wrap gap-4
          text-sm text-gray-300
          md:text-base
        "
      >
        <div className="flex items-center gap-2">
          <Film
            size={18}
            className="text-cyan-400"
          />
          {genre}
        </div>

        <div className="flex items-center gap-2">
          <Calendar
            size={18}
            className="text-cyan-400"
          />
          {year}
        </div>

        <div className="flex items-center gap-2">
          <Clock
            size={18}
            className="text-cyan-400"
          />
          {duration}
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2 text-cyan-400">
        <Star
          size={20}
          fill="currentColor"
        />

        <span className="text-lg font-semibold">
          {rating}/10
        </span>
      </div>

      <p
        className="
          mb-8
          max-w-3xl
          text-sm
          leading-relaxed
          text-gray-300
          sm:text-base
          md:text-lg
        "
      >
        {description}
      </p>

      {/* Trailer Button */}
      <button
        onClick={() =>
          setIsTrailerOpen(true)
        }
        disabled={!trailerKey}
        className="
          mb-8

          inline-flex
          w-fit

          items-center
          gap-2

          rounded-xl
          bg-cyan-400

          px-5
          py-3

          text-sm
          font-semibold
          text-black

          transition-all

          hover:bg-cyan-300
          hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]

          disabled:cursor-not-allowed
          disabled:opacity-50

          md:px-6
          md:text-base
        "
      >
        <Play
          size={18}
          fill="currentColor"
        />

        Watch Trailer
      </button>

      <div className="mb-6 h-px w-full bg-white/10" />

      {/* Cast */}
      {cast.length > 0 && (
        <div>
          <h3
            className="
              mb-5
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-gray-400
            "
          >
            Cast
          </h3>

          <div
            className="
              flex
              flex-wrap
              gap-4
              md:gap-6
            "
          >
            {cast.slice(0, 10).map((actor) => (
              <div
                key={actor.id}
                className="
                  w-[70px]
                  text-center
                  sm:w-[80px]
                  md:w-[90px]
                "
              >
                <div
                  className="
                    relative
                    mx-auto
                    h-14
                    w-14
                    overflow-hidden
                    rounded-full
                    border border-white/10

                    sm:h-16
                    sm:w-16

                    md:h-20
                    md:w-20
                  "
                >
                  <Image
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : "/avatar-placeholder.png"
                    }
                    alt={actor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="mt-3 text-[11px] font-semibold text-white md:text-xs">
                  {actor.name}
                </p>

                <p className="mt-1 text-[10px] text-gray-500 md:text-[11px]">
                  {actor.character}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <TrailerModal
        trailerKey={trailerKey ?? ""}
        isOpen={isTrailerOpen}
        onClose={() =>
          setIsTrailerOpen(false)
        }
      />
    </div>
  );
}