import axios from "axios";
import config from "./config.json";

const { IMDB_ID } = config;
const NEXT_PUBLIC_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const fetchMovies = async (): Promise<{
  content: MovieProps[];
  error?: any;
}> => {
  const movieData: MovieProps[] = [];
  try {
    for (let key in IMDB_ID) {
      const response = await axios.get(
        `${NEXT_PUBLIC_API_ENDPOINT}/?apikey=${NEXT_PUBLIC_API_KEY}&i=${IMDB_ID[key]}`
      );
      if (response.status !== 200) {
        throw new Error(`${response.status} - ${response.data}`);
      }
      movieData.push(response.data);
    }
  } catch (error) {
    return {
      error,
      content: [],
    };
  } finally {
    return {
      content: movieData,
    };
  }
};

export default fetchMovies;
