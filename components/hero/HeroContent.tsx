import HeroStats from "./HeroStats";
import HeroActions from "./HeroActions";

interface Props {
  movie: any;
}

export default function HeroContent({
  movie,
}: Props) {
  return (
    <div
      className="
        max-w-2xl
        text-center
        lg:text-left
      "
    >
      <div
        className="
          mb-6
          inline-flex
          items-center
          gap-2

          rounded-full
          border border-cyan-400/20
          bg-cyan-400/10

          px-4 py-2
        "
      >
        <span className="text-cyan-400">
          🔥
        </span>

        <span className="font-medium text-cyan-400">
          Trending This Week
        </span>
      </div>

      <h1
        className="
          mb-6

          text-4xl
          font-black
          text-white

          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
      >
        {movie.title}
      </h1>

      <p
        className="
          mb-10

          max-w-2xl

          text-base
          leading-relaxed
          text-gray-300

          md:text-lg
          lg:text-xl
        "
      >
        {movie.overview}
      </p>

      <div className="mb-10">
        <HeroStats movie={movie} />
      </div>

      <HeroActions movie={movie} />
    </div>
  );
}