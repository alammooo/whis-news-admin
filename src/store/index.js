import { legacy_createStore as createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { combined } from "./reducers/rootReducer"

const store = createStore(combined, applyMiddleware(thunk))

export default store
