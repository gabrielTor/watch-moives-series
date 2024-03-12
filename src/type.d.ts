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

interface MovieResults {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}

interface MovieDbResponse {
  page: number;
  results: MovieResults[];
  total_pages: number;
  total_results: number;
}

interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface MovieData {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
