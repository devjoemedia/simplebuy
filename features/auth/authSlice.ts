import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productInterface, userInterface } from "lib/types";

interface AuthState {
  user: userInterface | null;
  isLoading: boolean;
  isError: boolean;
  message: string;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isError: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.message = "";
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
