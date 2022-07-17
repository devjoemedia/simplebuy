import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productInterface } from "lib/types";
import { fetchProduct, fetchProducts } from "./productApi";

interface ProductState {
  products: productInterface[];
  product: any;
  quantity: number;
  isLoading: boolean;
  isError: boolean;
  message: string;
}

const initialState: ProductState = {
  products: [],
  product: null,
  quantity: 0,
  isLoading: false,
  isError: false,
  message: "",
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const data = await fetchProducts();
  return data;
});

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id: string) => {
    const data = await fetchProduct(id);
    return data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
    },
  },
  // handles actions defined outside the reducer example apiCalls like our PostAPI action
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.message = "Loading...";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.message = "success";
      })
      .addCase(getProducts.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.message = "failed to load Products";
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
        state.message = "Loading...";
      })
      .addCase(getProduct.fulfilled, (state, action: PayloadAction<any>) => {
        state.product = action.payload;
        state.isLoading = false;
        state.message = "success";
      })
      .addCase(getProduct.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.message = "failed to load Product";
      });
  },
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
