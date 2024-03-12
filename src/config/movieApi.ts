import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: { api_key: process.env.MOVIE_DB_API_KEY },
});

export default apiInstance;
