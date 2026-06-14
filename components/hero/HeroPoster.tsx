import Image from "next/image";

interface Props {
  movie: any;
}

export default function HeroPoster({
  movie,
}: Props) {
  return (
    <div
      className="
        relative
        flex
        justify-center

        lg:justify-end
      "
    >
      <div
        className="
          absolute
          -inset-6

          rounded-3xl

          bg-cyan-400/20

          blur-[80px]
          md:blur-[100px]
        "
      />

      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={380}
        height={560}
        priority
        className="
          relative

          w-[220px]

          rounded-3xl
          object-cover

          shadow-[0_0_40px_rgba(34,211,238,0.2)]

          sm:w-[260px]
          md:w-[320px]
          lg:w-[380px]
        "
      />
    </div>
  );
}