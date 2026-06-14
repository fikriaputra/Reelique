export default function Loading() {
  return (
    <section
      className="
        min-h-screen
        pt-24
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            mb-6

            h-10
            w-28

            animate-pulse
            rounded-xl

            bg-white/10
          "
        />

        <div
          className="
            grid
            gap-10

            lg:grid-cols-[420px_1fr]
          "
        >
          {/* Poster */}
          <div
            className="
              h-[620px]

              animate-pulse
              rounded-3xl

              bg-white/10
            "
          />

          {/* Content */}
          <div>

            <div
              className="
                mb-6

                h-16
                w-3/4

                animate-pulse
                rounded-xl

                bg-white/10
              "
            />

            <div className="mb-6 flex gap-4">

              <div
                className="
                  h-8
                  w-24

                  animate-pulse
                  rounded-full

                  bg-white/10
                "
              />

              <div
                className="
                  h-8
                  w-24

                  animate-pulse
                  rounded-full

                  bg-white/10
                "
              />

              <div
                className="
                  h-8
                  w-24

                  animate-pulse
                  rounded-full

                  bg-white/10
                "
              />

            </div>

            <div className="space-y-3">

              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
              <div className="h-4 w-4/6 animate-pulse rounded bg-white/10" />

            </div>

            <div
              className="
                mt-10

                h-12
                w-44

                animate-pulse
                rounded-xl

                bg-cyan-400/20
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}