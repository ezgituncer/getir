import {
  PRODUCT_SORTING,
  PRODUCT_BRANDS,
  PRODUCT_TAGS
} from '../actions/productActions';

const initialState = {
  sorting: 'lowtohigh',
  brands: [],
  tags: [],

};

const setSorting = (state,action)=>({
  ...state,
  sorting: action.data
})

const setBrands = (state,action)=>({
  ...state,
  brands: action.data
})

const setTags = (state,action)=>({
  ...state,
  tags: action.data
})
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SORTING:
      return setSorting(state,action)
    case PRODUCT_BRANDS:
      return setBrands(state,action)
    case PRODUCT_TAGS:
      return setTags(state,action)

    default:
      return state;
  }
};

export default productReducer;
