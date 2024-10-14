import {configureStore} from "@reduxjs/toolkit"
import useReducer from "./UserSlice"
import toggleReducer from "./Toggle";

const appStore = configureStore({
    reducer : {
        user : useReducer,
        arrow : toggleReducer
    }
})

export default appStore;