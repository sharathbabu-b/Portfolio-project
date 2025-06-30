import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "../slices.js/portfolioSlice"
import userReducer from "../slices.js/userSlice"
const store =configureStore({
    reducer:{
        portfolio:portfolioReducer,
        user:userReducer

    }
})
export default store