import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalLogin: false,
  isLogin: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleOpenModalLogin: (state, { payload }) => {
      state.modalLogin = payload
    },
    handleLogin: (state, {payload}) => {
      state.isLogin = payload
    }
  }
})

export const { 
  handleOpenModalLogin,
  handleLogin
} = authSlice.actions;

export default authSlice.reducer;