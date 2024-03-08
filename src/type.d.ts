interface Movie {
  _id: string;
  title: string;
  year?: number;
  title_id?: number;
  imdb_id?: string;
  tmdb_id?: number;
  tmdb_type?: string;
  type?: string;
  plot_overview?: string;
  runtime_minutes?: string;
  release_date?: string;
  poster?: string;
  genre_names?: string[];
  trailer?: string;
  trailer_thumbnail?: string;
  sources?: { name: string; web_url: string; _id?: string }[];
}
