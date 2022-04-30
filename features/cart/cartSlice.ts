import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { productInterface } from "lib/types";

interface CartState {
  items: productInterface[];
  cartTotal: number;
}

const initialState: CartState = {
  items: [],
  cartTotal: 0,
};

export const addCartItem = createAsyncThunk("cart/add", async (cItem) => {
  return cItem;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.items.forEach((item, index) => {
      //   if (item.id === action.payload.id) {
      //     // return action.payload;
      //     state.items.splice(index, 1, action.payload);
      //     console.log("test 1", action.payload);
      //   } else {
      //     state.items.push(action.payload);
      //     console.log("test 2", action.payload);
      //   }
      // });

      // console.log("Mongoose:", state.items);

      state.cartTotal = state.items.length;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.id !== action?.payload.id
      );

      state.cartTotal = state.items.length;
    },
    clearCart: (state) => {
      state.items = [];
      state.cartTotal = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCartItem.pending, (state) => {
        //
      })
      .addCase(addCartItem.fulfilled, (state, action: PayloadAction<any>) => {
        state.items.map((item, index) => {
          if (item.id === action.payload.id) {
            // return action.payload;
            state.items.splice(index, 1, action.payload);
            console.log("test 1", action.payload);
          } else {
            state.items.push(action.payload);
            console.log("test 2", action.payload);
          }
        });

        console.log("Mongoose:", state.items);
        state.items.push(action.payload);

        state.cartTotal = state.items.length;
      })
      .addCase(addCartItem.rejected, (state) => {
        // state.message = "failed to load Products";
      });
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
