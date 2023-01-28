import { AppThunk } from '../store';
import { setMovies } from '../reducers/movies';
import fetchMovies from '@/lib/omdb';

export const getMovieData = (): AppThunk => async (dispatch) => {
	const { content: movieData } = await fetchMovies();
	await dispatch(setMovies(movieData));
};