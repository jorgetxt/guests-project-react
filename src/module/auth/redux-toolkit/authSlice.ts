import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../schemas/login.schema";

export interface AuthState {
  isAuth: boolean;
  auth: LoginResponse;
  value: number;
}

const initialState: AuthState = {
  isAuth: false,
  auth: {} as LoginResponse,
  value: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setAuth: (state, action: PayloadAction<LoginResponse>) => {
      state.auth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsAuth, setAuth } = authSlice.actions;

export default authSlice.reducer;
