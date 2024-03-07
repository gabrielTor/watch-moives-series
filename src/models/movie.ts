import { Schema, model, models } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: Number,
  title_id: Number,
  imdb_id: String,
  tmdb_id: Number,
  tmdb_type: String,
  type: String,
});

const MovieModel = models.movie || model("movie", movieSchema);

export default MovieModel;
