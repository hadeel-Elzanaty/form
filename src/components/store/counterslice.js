import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name:"counter",
    initialState:{countValue:0},
    reducers:{
        increase:(state,action)=>{
            state.countValue+=action.payload;
        },
        decrease:(state,action)=>{
            state.countValue -= action.payload
        }
    }
})
export default counterSlice.reducer;
export const{decrease,increase} = counterSlice.actions;
