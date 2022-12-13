import { createSlice } from "@reduxjs/toolkit";

// const token_init = window ? window.localStorage.getItem('token') : null
const token_init = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null
const username_init = localStorage.getItem('username')
  ? localStorage.getItem('username')
  : null

const PersistRaw = localStorage.getItem('persist') ? JSON.parse(localStorage.getItem('persist')) : false

const initialState = {
  modalLogin: false,
  isLogin: false,
  token: token_init,
  user: username_init,
  auth: {},
  persist: PersistRaw
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleOpenModalLogin: (state, { payload }) => {
      state.modalLogin = payload
    },
    handleLogin: (state, {payload}) => {
      // ! remove
      state.isLogin = payload
    },
    handleSetCredentials: (state, {payload}) => {
      // ! remove
      state.token = payload.accessToken
      state.user = payload.user
    },
    handleLogout: (state, {payload}) => {
      // ! remove
      state.token = null
    },
    handleActiveUser: (state, {payload}) => {
      // ! remove
      state.user = payload
    },
    handleAuth: (state, { payload }) => {
      state.auth = payload
    }
  }
})

export const { 
  handleOpenModalLogin,
  handleLogin,
  handleSetCredentials,
  handleLogout,
  handleActiveUser,
  handleAuth
} = authSlice.actions;

export default authSlice.reducer;