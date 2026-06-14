import Hero from "@/components/hero/Hero";
import NowShowing from "@/components/now-showing/NowShowing";
import Movies from "@/components/movies/Movies";
import TopMovies from "@/components/top-movies/TopMovies";
import ComingSoon from "@/components/coming-soon/ComingSoon";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <NowShowing />
      <Movies />
      <TopMovies />
      <ComingSoon />
      <Footer />
    </>
  );
}