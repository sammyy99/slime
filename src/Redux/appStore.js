import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './headerSlice'
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice"


const appStore = configureStore(
    {
    reducer:{
        header : headerReducer,
        search : searchReducer,
        chat   : chatReducer,
    }
}
);

export default appStore;