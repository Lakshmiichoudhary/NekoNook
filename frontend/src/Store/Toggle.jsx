import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name : "arrow",
    initialState : {
        openArrow : [],
    },
    reducers : {
        toggleArrow : (state,action) => {
            const index = action.payload;
            if (state.openArrow.includes(index)) {
                state.openArrow = state.openArrow.filter((i) => i !== index);
            } else {
                state.openArrow.push(index);
            }
        }
    }
})

export const {toggleArrow} = toggleSlice.actions;

export default toggleSlice.reducer;