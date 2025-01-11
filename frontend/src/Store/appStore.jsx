import {configureStore} from "@reduxjs/toolkit"
import useReducer from "./UserSlice"
import toggleReducer from "./Toggle";
import itemReducer from "./Items"

const appStore = configureStore({
    reducer : {
        user : useReducer,
        arrow : toggleReducer,
        cart : itemReducer
    }
})

export default appStore;