import { rootReducer } from "./CombineReducers";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: rootReducer 

})
export default store