import { CartActionTypes } from "./cartActionTypes";
import { addItemToCart, removeItemFromCart } from "./cartUtils";


const INITAL_STATE = {
    cartItems:[]

};

const cartReducer = (state = INITAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.CART_ADD_ITEM:
            return {
                ...state,
                 cartItems: addItemToCart(state.cartItems, action.payload)
            }
            case CartActionTypes.CART_REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload)
                }

        default:
            break;
    }
}

export default cartReducer;