"use server";
import api from "@/config/movieApi";
//movie id /reviews
export async function getMovies(
  page: string = "1",
  type: string = "popular"
): Promise<MovieDbResponse | undefined> {
  try {
    const popularMovies = await api.get(`/movie/${type}?page=${page}`);
    return popularMovies.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSeries(
  page: string = "1"
): Promise<MovieDbResponse | undefined> {
  try {
    const series = await api.get(`/discover/tv?page=${page}`);
    return series.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(
  id: string,
  isSeries?: boolean
): Promise<MovieData | undefined> {
  const path = isSeries ? "tv" : "movie";
  try {
    const movie = await api.get(`/${path}/${id}?append_to_response=videos`);
    return movie.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSearchedMovies(
  query: string,
  page: string = "1"
): Promise<MovieDbResponse | undefined> {
  try {
    const movieQuery = await api.get(
      `/search/movie?page=${page}&query=${query}`
    );
    return movieQuery.data;
  } catch (error) {
    console.log(error);
  }
}
