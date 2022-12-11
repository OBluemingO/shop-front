import { createSlice } from "@reduxjs/toolkit";

// const token_init = window ? window.localStorage.getItem('token') : null
const token_init = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null
const username_init = localStorage.getItem('username')
  ? localStorage.getItem('username')
  : null

const initialState = {
  modalLogin: false,
  isLogin: false,
  token: token_init,
  user: username_init,
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
      state.token = payload.accessToken
      state.user = payload.user
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