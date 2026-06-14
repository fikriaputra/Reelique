import {
  Star,
  Film,
  Flame,
  Calendar,
} from "lucide-react";

interface Props {
  movie: any;
}

export default function HeroStats({
  movie,
}: Props) {
  const stats = [
    {
      icon: <Star size={20} />,
      value: movie.vote_average.toFixed(1),
      label: "TMDB Rating",
    },
    {
      icon: <Film size={20} />,
      value: "Trending",
      label: "Movie",
    },
    {
      icon: <Flame size={20} />,
      value: "#1",
      label: "This Week",
    },
    {
      icon: <Calendar size={20} />,
      value:
        movie.release_date?.split("-")[0],
      label: "Release",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4

        lg:flex
        lg:flex-wrap
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            flex
            items-center
            gap-3

            rounded-2xl
            border border-white/10

            bg-white/5

            px-4 py-4

            backdrop-blur-xl
          "
        >
          <div className="text-cyan-400">
            {stat.icon}
          </div>

          <div>
            <p className="font-semibold text-white">
              {stat.value}
            </p>

            <span className="text-sm text-gray-400">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}