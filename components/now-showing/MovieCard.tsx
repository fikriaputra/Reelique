import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

interface MovieCardProps {
  id: string | number;
  title: string;
  genre: string;
  rating: number;
  image: string;
}

export default function MovieCard({
  id,
  title,
  genre,
  rating,
  image,
}: MovieCardProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-cyan-400/30
        hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
      "
    >
      {/* Poster */}
      <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/90
            via-black/40
            to-transparent
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Details Button */}
        <div
          className="
            absolute bottom-6 left-1/2
            -translate-x-1/2
            translate-y-4
            opacity-0
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <Link
            href={`/movies/${id}`}
            className="
              flex items-center gap-2
              rounded-xl
              bg-cyan-400
              px-4 py-2.5
              md:px-5 md:py-3
              text-sm
              md:text-base
              font-semibold
              text-black
              transition-all
              duration-300
              hover:bg-cyan-300
            "
          >
            Details
            <ArrowRight
              size={16}
              fill="currentColor"
            />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-white md:text-xl">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">
            {genre}
          </span>

          <div className="flex items-center gap-1 text-cyan-400">
            <Star
              size={16}
              fill="currentColor"
            />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
}