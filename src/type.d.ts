interface MovieProps {
  Title: string;
  Poster: string;
  Plot: string;
  imdbRating: string;
  imdbID: string;
}

type MovieState = {
  movies: MovieProps[];
};

type MovieAction = {
  type: string;
  payload: any;
};

type DispatchType = (args: MovieAction) => MovieAction;