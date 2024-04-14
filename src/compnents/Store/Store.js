import { configureStore } from "@reduxjs/toolkit"
import MarksReducer from "./StudentSlice"
const Store = configureStore({
    reducer: {
        marks: MarksReducer
    },
})

export default Store