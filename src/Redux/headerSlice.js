import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name:"headerSlice",
    initialState:{
        sidebar : false,
    },
    reducers:{
        sidebarToggle:(state,action)=>{
            state.sidebar = !state.sidebar
        },
    }
})

export default headerSlice.reducer;
export const {sidebarToggle} = headerSlice.actions;