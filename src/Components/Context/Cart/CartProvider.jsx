import React, { useReducer } from "react"
import CartContext from "./CartContext"
import { ADD_TO_CART, DELETE_FROM_CART } from "./actions"

const initialState = {
    cart: []
}
const CartReducer = (state=initialState, action)=>{
    if(action.type === ADD_TO_CART){
        return {
            cart: state.cart.concat(action.course)
        }
    }
    if(action.type === DELETE_FROM_CART){
        return{
            cart: state.cart.filter(c => c !== action.course)
        }
    }
    return state
}
const CartProvider = ({ children }) => {
    const [state, dispatch]= useReducer(CartReducer, initialState)
    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider