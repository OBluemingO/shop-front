import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalLogin: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleOpenModalLogin: (state, { payload }) => {
      state.modalLogin = payload
    }
  }
})

export const { 
  handleOpenModalLogin
} = authSlice.actions;

export default authSlice.reducer;