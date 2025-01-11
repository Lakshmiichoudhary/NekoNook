import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name : "item",
    initialState : {
        items : []
    },
    reducers : {
        addItems : (state,action) => {
            state.items.push(action.payload)
        },
        removeItem : (state,action) => {
            state.items.pop()
        }
    }
})

export const { addItems, removeItem} = itemsSlice.actions 

export default itemsSlice.reducer