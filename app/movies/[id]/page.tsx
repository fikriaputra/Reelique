import MovieDetail from "@/components/movie-detail/MovieDetail";

import {
  getMovieDetails,
  getMovieCredits,
  getMovieVideos,
} from "@/services/movieServices";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movie =
    await getMovieDetails(id);

  const cast =
    await getMovieCredits(id);

  const videos =
    await getMovieVideos(id);

  const trailer = videos.find(
    (video: any) =>
      video.site === "YouTube" &&
      video.type === "Trailer"
  );

  return (
    <MovieDetail
      movie={movie}
      cast={cast}
      trailerKey={trailer?.key}
    />
  );
}