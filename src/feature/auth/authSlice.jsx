import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalLogin: false,
  isLogin: false,
  acc_token: null,
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
    },
    handleSetCredentials: (state, {payload}) => {
      state.acc_token = payload?.accessToken
    },
    handleLogout: (state, {payload}) => {
      state.acc_token = null
    }
  }
})

export const { 
  handleOpenModalLogin,
  handleLogin,
  handleSetCredentials,
  handleLogout
} = authSlice.actions;

export default authSlice.reducer;