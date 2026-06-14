import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        py-16 md:py-20
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          -z-10
          pointer-events-none
        "
      >
        {/* Glow kiri */}
        <div
          className="
            absolute
            left-[-200px]
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/5
            blur-[180px]
          "
        />

        {/* Glow kanan */}
        <div
          className="
            absolute
            right-[-150px]
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-500/5
            blur-[180px]
          "
        />

        {/* Radial */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03),transparent_70%)]
          "
        />

        {/* Gradient */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_top,rgba(34,211,238,0.04),transparent)]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            grid
            gap-12

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          <FooterBrand />

          <FooterLinks
            title="Navigation"
            links={[
              "Home",
              "Movies",
              "Top Movies",
              "Coming Soon",
            ]}
          />

          <FooterLinks
            title="Categories"
            links={[
              "Action",
              "Sci-Fi",
              "Animation",
              "Drama",
            ]}
          />

          <FooterLinks
            title="Resources"
            links={[
              "About",
              "Contact",
              "Privacy Policy",
              "Terms of Service",
            ]}
          />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}