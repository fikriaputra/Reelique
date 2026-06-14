"use client";

interface GenreFilterProps {
  genres: string[];
  selectedGenre: string;
  onSelectGenre: (
    genre: string
  ) => void;
}

export default function GenreFilter({
  genres,
  selectedGenre,
  onSelectGenre,
}: GenreFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() =>
            onSelectGenre(genre)
          }
          className={`
            rounded-full
            px-4
            py-2
            text-xs

            sm:px-5
            sm:py-2.5
            sm:text-sm

            font-medium
            transition-all
            duration-300

            ${
              selectedGenre === genre
                ? "bg-cyan-400 text-black shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                : "border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/30 hover:text-white"
            }
          `}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}