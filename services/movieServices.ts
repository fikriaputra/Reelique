import { tmdb } from "@/lib/tmdb";

export async function getNowPlayingMovies() {
  const res = await tmdb.get(
    "/movie/now_playing"
  );

  return res.data.results;
}

export async function getMovies() {
  const res = await tmdb.get(
    "/discover/movie"
  );

  return res.data.results;
}

export async function getPopularMovies() {
  const res = await tmdb.get(
    "/movie/popular"
  );

  return res.data.results;
}

export async function getUpcomingMovies() {
  const res = await tmdb.get(
    "/movie/upcoming"
  );

  return res.data.results;
}

export async function getHeroMovie() {
  const res = await tmdb.get(
    "/trending/movie/week"
  );

  return res.data.results[0];
}

export async function getMovieDetail(
  id: string
) {
  const response = await tmdb.get(
    `/movie/${id}`
  );

  return response.data;
}

export async function getMovieCredits(
  id: string
) {
  const response = await tmdb.get(
    `/movie/${id}/credits`
  );

  return response.data.cast;
}

export async function getGenres() {
  const response = await tmdb.get(
    "/genre/movie/list"
  );

  return response.data.genres;
}

export async function getMovieVideos(
  id: string
) {
  const response = await tmdb.get(
    `/movie/${id}/videos`
  );

  return response.data.results;
}

export async function getMovieDetails(
  id: string
) {
  const response = await tmdb.get(
    `/movie/${id}`
  );

  return response.data;
}

export async function searchMovies(
  query: string
) {
  const response = await tmdb.get(
    "/search/movie",
    {
      params: {
        query,
      },
    }
  );

  return response.data.results;
}

export async function getTrendingMovies() {
  const response = await tmdb.get(
    "/trending/movie/week"
  );

  return response.data.results;
}
