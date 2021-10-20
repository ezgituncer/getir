import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  basketReducer,
  productReducer

} from '../../redux/reducers/index';

const reducer = combineReducers({
  basket: basketReducer,
  product: productReducer

});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
