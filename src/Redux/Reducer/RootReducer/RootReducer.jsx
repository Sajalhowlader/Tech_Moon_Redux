import { combineReducers } from "redux";
import { filterReducer } from "../FilterReducer/FilterReducer";
import ProductReducer from "../ProductReducer/ProductReducer";
const rootReducer = combineReducers({
  product: ProductReducer,
  filter: filterReducer,
});
export default rootReducer;
