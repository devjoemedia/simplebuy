import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "features/auth/authSlice";
import productSlice from "features/products/productSlice";
import cartSlice from "features/cart/cartSlice";
import thunkMiddleware from "redux-thunk";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  auth: authSlice,
  products: productSlice,
  cart: cartSlice,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunkMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
