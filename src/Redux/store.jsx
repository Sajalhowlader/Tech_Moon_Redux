import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import cartCounter from "./Middleware/CartCounter";
import rootReducer from "./Reducer/RootReducer/RootReducer";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter))
);
export default store;
