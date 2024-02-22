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
                state.message.shift()
            }
            state.message.push(action.payload);
        },
    }
});

export default chatSlice.reducer;
export const {addMessage} = chatSlice.actions;