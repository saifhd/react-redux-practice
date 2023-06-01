import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Feature/Counter/CounterSlice";

export default configureStore({
    reducer: {
        counter: CounterReducer
    },
    devTools:true
});