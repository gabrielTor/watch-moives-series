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
    const movie = await api.get("/movie/" + id);
    return movie.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSearchedMovies(
  page: string = "1",
  query: string
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
