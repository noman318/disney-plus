import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  trending: null,
  originals: null,
  newDisney: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.trending = action.payload.trending;
      state.originals = action.payload.originals;
      state.newDisney = action.payload.newDisney;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectTrending = (state) => state.movie.trending;
export const selectOriginals = (state) => state.movie.originals;
export const selectNewDisney = (state) => state.movie.newDisney;

export default movieSlice.reducer;
