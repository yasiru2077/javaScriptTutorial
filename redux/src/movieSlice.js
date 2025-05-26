import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [
    { id: 1, name: "Interstellar" },
    { id: 2, name: "Dark Knight" },
  ],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    // removeMovie: (state, action) => {},
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
