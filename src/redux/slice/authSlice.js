import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  current,
} from 'redux/operations/authOperation';

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.token = action.payload.token;
  state.user = action.payload.user;
  state.isLoggedIn = true;
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: handleFulfilled,
    [register.pending]: handlePending,
    [register.rejected]: handleRejected,

    [login.fulfilled]: handleFulfilled,
    [login.pending]: handlePending,
    [login.rejected]: handleRejected,

    [current.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [current.pending]: handlePending,
    [current.rejected]: handleRejected,

    [logout.fulfilled](state) {
      state.isLoading = true;
      state.error = null;
      state.token = null;
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
    },
    [logout.rejected]: handleRejected,
  },
});
export const authReducer = authSlice.reducer;
