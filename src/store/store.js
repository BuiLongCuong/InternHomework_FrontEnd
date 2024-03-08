import { createSlice, configureStore } from "@reduxjs/toolkit";
const loginState = { login: false, username: "" };
const loginSlice = createSlice({
  name: "login",
  initialState: loginState,
  reducers: {
    ON_LOGIN(state, action) {
      state.login = true;
      state.username = action.payload;
    },
    ON_LOGOUT(state) {
      state.login = false;
    },
  },
});

const store = configureStore({ reducer: { login: loginSlice.reducer } });

export const loginAction = loginSlice.actions;

export default store;
