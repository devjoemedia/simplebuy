import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import { productInterface } from "lib/types";

interface CartState {
  items: productInterface[];
  cartTotal: number;
  cartCount: number;
}

const initialState: CartState = {
  items: [],
  cartTotal: 0,
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // let arr = current(state).items;

      // if (arr.length == 0) state.items.push(action.payload);
      // if (state.items.length == 0) state.items.push(action.payload);
      // else {
      //   let exist = false;

      //   state.items.forEach((item) => {
      //     if (item.id === action.payload.id) exist = true;
      //   });

      //   if (!exist) state.items.push(action.payload);
      // }
      state.items.push(action.payload);

      state.cartCount = state.items.length;
      state.cartTotal = state.items.reduce((sum, item) => sum + item.price, 0);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.id !== action?.payload.id
      );

      state.cartCount = state.items.length;
      state.cartTotal = state.items.reduce((sum, item) => sum + item.price, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.cartTotal = 0;
      state.cartCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
