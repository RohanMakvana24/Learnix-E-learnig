import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../../features/redux/Auth/authSlice"
const store = configureStore({
    reducer :{
      auth : authReducer
    }
});

export default store

