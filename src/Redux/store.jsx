import {createStore} from "redux"
import ProductReducer from "./Reducer/ProductReducer/ProductReducer"
const store = createStore(ProductReducer)
export default store