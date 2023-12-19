import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer:{ //whole big reducer
        cart: cartReducer, //small reducer for cart slice
        //for example user: userReducer seperate reducer for user slice 
        // user:userReducer

    },
});
export default appStore;