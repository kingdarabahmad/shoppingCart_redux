import { createSlice } from "@reduxjs/toolkit";

 const cartSlice= createSlice({
    name:'cart',
    initialState:[],
    
    reducers:{
        add:(state,action)=>{
            if(state.empty)
            return [...state, action.payload]

        },
        remove:(state,action)=>{
           return state.filter((i)=>i.id!==action.payload)
        },
        empty:(state,action)=>{
            return []
        }
    }
})

export const {add,remove,empty}=cartSlice.actions
export default cartSlice.reducer