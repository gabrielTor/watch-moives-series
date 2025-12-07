"use server";
import api from "@/config/movieApi";
import getBase64Url from "@/utils/getBase64Url";

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

export async function getMovieById(id: string): Promise<MovieData | undefined> {
  try {
    const movie = await api.get(`/movie/${id}?append_to_response=videos`);
    const blurredImage = await getBase64Url(
      movie.data?.poster_path ?? movie.data?.backdrop_path
    );
    return { ...movie.data, blurredImage };
  } catch (error) {
    console.log(error);
  }
}

export async function getSeriesById(id: string): Promise<TVShow | undefined> {
  try {
    const show = await api.get(`/tv/${id}?append_to_response=videos`);
    const blurredImage = await getBase64Url(
      show.data?.poster_path ?? show.data?.backdrop_path
    );
    return { ...show.data, blurredImage };
  } catch (error) {
    console.log(error);
  }
}

export async function getReviews(
  id: string
): Promise<ReviewsResponse | undefined> {
  try {
    const reviews = await api.get(`/movie/${id}/reviews`);
    return reviews.data;
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

export async function getSearchedSeries(
  query: string,
  page: string = "1"
): Promise<MovieDbResponse | undefined> {
  try {
    const seriesQuery = await api.get(`/search/tv?page=${page}&query=${query}`);
    return seriesQuery.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getEpisodesBySeason(
  tvId: string,
  seasonNumber: string
): Promise<SeasonResponse | undefined> {
  try {
    const season = await api.get(`/tv/${tvId}/season/${seasonNumber}`);
    return season.data;
  } catch (error) {
    console.log(error);
  }
}
