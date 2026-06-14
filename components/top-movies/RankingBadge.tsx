interface RankingBadgeProps {
  rank: number;
}

export default function RankingBadge({
  rank,
}: RankingBadgeProps) {
  const colors = {
    1: "bg-yellow-400 text-black",
    2: "bg-slate-300 text-black",
    3: "bg-amber-700 text-white",
  };

  return (
    <div
      className={`
        absolute left-4 top-4 z-20
        flex h-10 w-10 md:h-12 md:w-12 items-center justify-center
        rounded-full font-bold shadow-lg
        ${
          colors[rank as keyof typeof colors] ??
          "bg-cyan-400 text-black"
        }
      `}
    >
      #{rank}
    </div>
  );
}