/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    username: null,
  },
  reducers: {
    setAuth(state) {
      state.isAuthenticated = true;
    },
    setUsername(state, action) {
      const { username } = action.payload;
      state.username = username;
    },
  },
});

export const { setAuth, setUsername } = authSlice.actions;
export default authSlice.reducer;
