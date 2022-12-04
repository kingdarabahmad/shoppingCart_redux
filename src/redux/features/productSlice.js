import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    productsData: [],
    error: "",
  },
  reducers: {
    search: (state, action) => {
      if (action.payload) {
        state.productsData = state.productsData.filter((item) =>
          item.title.toLowerCase().includes(action.payload)
        );
        return state;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsData = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = "some went wrong";
    });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  }
);

export const { search } = productSlice.actions;
export default productSlice.reducer;
