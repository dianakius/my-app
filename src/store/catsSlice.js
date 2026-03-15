import { createSlice } from "@reduxjs/toolkit";

const catsSlice = createSlice({
  name: "cats",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setCats(state, action) {
      state.items = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setCats, setError } = catsSlice.actions;

export default catsSlice.reducer;
