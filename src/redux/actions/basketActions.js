export const ADD_REMOVE_PRODUCT = 'ADD_REMOVE_PRODUCT ';
export const BASKET_TOTAL = 'BASKET_TOTAL ';

export function setProducts(data) {
  return {
    type: ADD_REMOVE_PRODUCT ,
    data,
  };
}
export function setTotal(data) {
  return {
    type: BASKET_TOTAL ,
    data,
  };
}
