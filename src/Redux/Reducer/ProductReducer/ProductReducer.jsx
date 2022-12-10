import { ADD_TO_CART, REMOVE_FROM_CART } from "../../ActionTypes/ActionTypes";

const initialState = {
  cart: [],
};
const ProductReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  console.log(selectedProduct);
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        const newSelectedProduct = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity + 1;
        return {
          ...state,
          cart: [...newSelectedProduct, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default ProductReducer;
