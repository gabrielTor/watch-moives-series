"use server";
import api from "@/config/movieApi";
import getBase64Url from "@/utils/getBase64Url";
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
    const series = await api.get(`/tv/popular?page=${page}`);
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
    const blurredImage = await getBase64Url(
      movie.data?.poster_path ?? movie.data?.backdrop_path
    );
    return { ...movie.data, blurredImage };
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
