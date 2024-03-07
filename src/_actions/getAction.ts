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

export async function getMovies() {
  try {
    await connectDB();
    const movies = await MovieModel.find().lean();
    return movies;
  } catch (error) {
    console.log(error);
  }
}
