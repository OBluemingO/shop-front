import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalLogin: false,
  isLogin: false,
  acc_token: null,
  active_user: false,
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
    },
    handleActiveUser: (state, {payload}) => {
      state.active_user = payload
    }
  }
})

export const { 
  handleOpenModalLogin,
  handleLogin,
  handleSetCredentials,
  handleLogout,
  handleActiveUser
} = authSlice.actions;

export default authSlice.reducer;