interface Movie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: 'movie' | 'series' | 'episode';
  Poster: string;

  Released: string;
  Rated: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
}