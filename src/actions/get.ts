"use server";
import api from "@/config/movieApi";

export async function getMovies(
  page: string = "1"
): Promise<MovieDbResponse | undefined> {
  try {
    const popularMovies = await api.get(`/popular?page=${page}`);
    return popularMovies.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(id: string): Promise<MovieData | undefined> {
  try {
    const movie = await api.get(id);
    return movie.data;
  } catch (error) {
    console.log(error);
  }
}
