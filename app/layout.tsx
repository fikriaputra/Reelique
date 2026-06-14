import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import BackgroundEffects from "@/components/background/BackgroundEffects";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
          relative
          overflow-x-hidden
          bg-[#050816]
          text-white
        "
      >
        <BackgroundEffects />

        <Navbar />

        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "ReeLique",
  description: "Movie Discovery Platform",
};