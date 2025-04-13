import { createSlice } from "@reduxjs/toolkit";
import User from "@/types/user";

const userInfoFromStorage = localStorage.getItem("userInfo");
const initialState = {
  userInfo: userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null,
};

const authSlice = createSlice({
  name: `auth`,
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
