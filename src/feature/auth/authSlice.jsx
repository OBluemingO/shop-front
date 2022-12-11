import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalLogin: false,
  isLogin: false,
  token: null,
  user: null,
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
      state.token = payload?.accessToken
    },
    handleLogout: (state, {payload}) => {
      state.token = null
    },
    handleActiveUser: (state, {payload}) => {
      state.user = payload
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