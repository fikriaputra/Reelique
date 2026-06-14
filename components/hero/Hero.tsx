import HeroContent from "./HeroContent";
import HeroPoster from "./HeroPoster";

import { getTrendingMovies } from "@/services/movieServices";

export default async function Hero() {
  const movies =
    await getTrendingMovies();

  const movie = movies[0];

  const backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section
      id="home"
      className="
        scroll-mt-24
        relative
        overflow-hidden

        pt-20
        md:pt-24
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0

          bg-cover
          bg-center
        "
        style={{
          backgroundImage: `url(${backdrop})`,
        }}
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-[#050816]
          via-[#050816]/90
          to-[#050816]/60
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl

          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            flex-col-reverse

            items-center
            gap-12

            py-12

            lg:min-h-[calc(100vh-90px)]
            lg:flex-row
            lg:justify-between
            lg:py-0
          "
        >
          <HeroContent movie={movie} />
          <HeroPoster movie={movie} />
        </div>
      </div>
    </section>
  );
}