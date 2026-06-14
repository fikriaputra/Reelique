export default function HeroSkeleton() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          inset-0

          animate-pulse

          bg-white/5
        "
      />

      <div
        className="
          relative

          mx-auto
          max-w-7xl

          px-6
        "
      >
        <div
          className="
            flex
            min-h-screen
            items-center
            justify-between
          "
        >
          <div className="max-w-2xl">

            <div
              className="
                mb-6

                h-10
                w-52

                animate-pulse
                rounded-full

                bg-cyan-400/20
              "
            />

            <div
              className="
                mb-4

                h-16
                w-[500px]

                animate-pulse
                rounded-xl

                bg-white/10
              "
            />

            <div
              className="
                mb-8

                h-16
                w-[420px]

                animate-pulse
                rounded-xl

                bg-white/10
              "
            />

            <div className="space-y-3">

              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-white/10" />

            </div>

          </div>

          <div
            className="
              hidden

              h-[560px]
              w-[380px]

              animate-pulse
              rounded-3xl

              bg-white/10

              lg:block
            "
          />

        </div>
      </div>
    </section>
  );
}