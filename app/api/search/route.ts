import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const { searchParams } =
    new URL(request.url);

  const query =
    searchParams.get("query");

  if (!query) {
    return NextResponse.json([]);
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return NextResponse.json(
    data.results || []
  );
}