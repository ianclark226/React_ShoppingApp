import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  cartReducer  from './cart/cartReducer';

const persistConfig = {
    key: 'ianclark226',
    storage,
    blacklist:['cart']
}

const reducer = combineReducers ({
    cart: cartReducer,
})

export default persistReducer(persistConfig, reducer);