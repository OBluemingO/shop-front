import { configureStore } from '@reduxjs/toolkit';
import authReducer from './feature/auth/authSlice';
// import logger from "redux-logger";

// const middleWares = [logger]

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // modal: modalReducer,
  },
  // middleware: middleWares,
  devTools: true
});