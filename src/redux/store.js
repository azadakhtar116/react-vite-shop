import { configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/authSlice'
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productsSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        products: productReducer
    }
});
export default { store }