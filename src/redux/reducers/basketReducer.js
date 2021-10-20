import {
  ADD_REMOVE_PRODUCT,
  BASKET_TOTAL
} from '../actions/basketActions';

const initialState = {
  products: [],
  total: 0

};

const addBasket = (state, action) => {
  const newProduct = {
    name: action.data.name,
    price: action.data.price,
    count: action.data.count,
  }
  let sameName = '';
  let newList = [];
  if (state.products.length === 0) {
    newList = [newProduct]
  }
  if (state.products.length !== 0) {
    state.products.map((item) => {
      if (item.name === newProduct.name) {
        sameName = item.name;
        newList = state.products.filter(item => item.name !== sameName)
        if (action.data.operation === 'add') {
          newProduct.count = item.count + 1;
          newList.push(newProduct)
        } else {
          newProduct.count = item.count - 1;
          if (newProduct.count !== 0) {
            newList.push(newProduct)
          }
        }
      }
    })
  }
  if (sameName.length === 0) {
    return {
      ...state,
      products: [...state.products, newProduct]
    }}else {
    return {
      ...state,
      products: newList
    }}
}
const setTotal = (state, action) => ({
  ...state,
  total: action.data
})
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REMOVE_PRODUCT:
      return addBasket(state, action);
    case BASKET_TOTAL:
      return setTotal(state, action);
    default:
      return state;
  }
};

export default basketReducer;