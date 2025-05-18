import { createSlice } from "@reduxjs/toolkit";
// Utility Service
import { getToken, getUser } from '../../utility/AuthService';

const initialState = {
    token: getToken(),
    user: getUser()
};

export const userSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});
export const {
    setToken,
    setUser
} = userSlice.actions;

export const selectToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;

export default userSlice.reducer;