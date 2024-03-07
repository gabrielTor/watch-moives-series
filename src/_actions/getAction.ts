"use server";
import connectDB from "@/config/config";
import MovieModel from "@/models/movie";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.watchmode.com/v1",
});
const apiKey = process.env.WATCH_MODE_API_KEY;

export async function saveMoviesToDB() {
  try {
    await connectDB();
    const response = await api.get(`/list-titles/?apiKey=${apiKey}&page=4`);
    const allMovieTitles = response.data.titles.map((a: any) => ({
      ...a,
      title_id: a.id,
    }));
    await MovieModel.insertMany(allMovieTitles);
    return;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieDetails() {
  try {
    await connectDB();
    const movies = await MovieModel.find();

    for (let i = 0; i < movies.length; i++) {
      const id = movies[i].title_id;
      const response = await api.get(
        `/title/${id}/details/?apiKey=${apiKey}&append_to_response=sources`
      );
      movies[i].plot_overview = response.data.plot_overview;
      movies[i].runtime_minutes = response.data.runtime_minutes;
      movies[i].release_date = response.data.release_date;
      movies[i].poster = response.data.poster;
      movies[i].genre_names = response.data.genre_names;
      movies[i].trailer = response.data.trailer;
      movies[i].trailer_thumbnail = response.data.trailer_thumbnail;
      movies[i].sources = response.data.sources?.map((a: any) => ({
        name: a.name,
        web_url: a.web_url,
      }));
      await movies[i].save();
    }

    console.log("done");
    return;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovies() {
  try {
    await connectDB();
    const movies = await MovieModel.find().limit(100).lean();
    return movies;
  } catch (error) {
    console.log(error);
  }
}
