"use client";

import { X } from "lucide-react";

interface TrailerModalProps {
  trailerKey: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function TrailerModal({
  trailerKey,
  isOpen,
  onClose,
}: TrailerModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]

        flex
        items-center
        justify-center

        bg-black/80
        backdrop-blur-sm

        p-4
      "
    >
      <div
        className="
          relative

          w-full
          max-w-5xl

          overflow-hidden
          rounded-3xl

          border
          border-white/10

          bg-[#050816]
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute
            right-4
            top-4

            z-10

            rounded-full
            bg-black/60

            p-2

            text-white

            transition-all
            hover:bg-cyan-400
            hover:text-black
          "
        >
          <X size={20} />
        </button>

        {/* Video */}
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            title="Movie Trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}