import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MovieState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'Movie',
  initialState: initialState,
  reducers: {
    setMovies(state, action: PayloadAction<MovieProps[]>) {
      state.movies = action.payload;
    },
  },
});

export const {
  setMovies,
} = movieSlice.actions;

export const movies = movieSlice.reducer;