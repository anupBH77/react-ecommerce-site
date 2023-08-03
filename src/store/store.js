import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import userReducer from '../reducers/slices/userSlice'
import cartItemReducer from '../reducers/slices/cartItemSlice'
import dropHandlerReducer from "../reducers/slices/dropHandlerSlice";
import ShopPageDataReducer from '../reducers/slices/shopPageDataSlice'
import formReducer from "../reducers/slices/formSlice";

export const store=configureStore({
    reducer:{
        user:userReducer,
        cartItem:cartItemReducer,
        dropHandler:dropHandlerReducer,
        ShopPageData:ShopPageDataReducer,
        form:formReducer,
    },
});
// const store= createStore(combineReducers({}))