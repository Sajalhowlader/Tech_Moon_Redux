import { TOGGLE_BRAND, TOGGLE_STOCK } from "../ActionTypes/ActionTypes";

export const toggleBrands = (brandsName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandsName,
  };
};
export const toggleStocks = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
