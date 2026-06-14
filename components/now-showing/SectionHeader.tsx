interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 md:mb-10">
      <h2
        className="
          text-3xl
          font-bold
          text-white

          sm:text-4xl
          lg:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-2
          max-w-2xl
          text-sm
          text-gray-400

          md:text-base
        "
      >
        {subtitle}
      </p>
    </div>
  );
}