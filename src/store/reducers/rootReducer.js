import { combineReducers } from "redux"
import { categoryReducer } from "./categoryReducer"
import { newsReducer } from "./newsReducer"

export const combined = combineReducers({
  categoryReducer,
  newsReducer,
})
