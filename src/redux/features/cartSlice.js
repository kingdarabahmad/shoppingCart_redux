import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("data")),

  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("data", JSON.stringify(state));
    },
    remove: (state, action) => {
      state = state.filter((prod) => prod.id !== action.payload);
      localStorage.setItem("data", JSON.stringify(state));
      return state;
    },
    empty: (state, action) => {
      state = [];
      localStorage.setItem("data", JSON.stringify(state));
      return state;
    },
  },
});

export const { add, remove, empty } = cartSlice.actions;
export default cartSlice.reducer;
