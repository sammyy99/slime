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
        sidebarhide:(state,action)=>{
            state.sidebar = false;
        },
    }
})

export default headerSlice.reducer;
export const {sidebarToggle , sidebarhide} = headerSlice.actions;