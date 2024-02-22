import { createSlice } from "@reduxjs/toolkit";
import { liveChatCount } from "../constants/helperUtility";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            if(state.message.length>liveChatCount){
                state.message.splice(30,1)
            }
            state.message.unshift(action.payload);
        },
    }
});

export default chatSlice.reducer;
export const {addMessage} = chatSlice.actions;