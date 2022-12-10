import {createStore} from "redux"
import ProductReducer from "./Reducer/ProductReducer/ProductReducer"
import {composeWithDevTools} from "@redux-devtools/extension"
const store = createStore(ProductReducer ,composeWithDevTools())
export default store