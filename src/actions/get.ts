"use server";
import api from "@/config/movieApi";

export async function getMovies(
  page: string = "1"
): Promise<MovieDbResponse | undefined> {
  try {
    const popularMovies = await api.get(`/movie/popular?page=${page}`);
    return popularMovies.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(id: string): Promise<MovieData | undefined> {
  try {
    const movie = await api.get(`/movie/${id}?append_to_response=videos`);
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
