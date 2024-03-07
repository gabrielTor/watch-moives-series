import { Schema, model, models } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const MovieModel = models.movie || model("movie", movieSchema);

export default MovieModel;
