import { createStore,combineReducers, applyMiddleware } from "redux"
import { ADD_TO_CART, DELETE_FROM_CART, GET_COURSE_LIST } from "./actions"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
const initialStore = {
    cart: []
}
const initialCourses = {
    courses:[]
}

const cartReducer = (state = initialStore, action) => {

    if (action.type === ADD_TO_CART) {
        if (state.cart.find(a => a === action.data)) return state

        return {
            ...state,
            cart: state.cart.concat(action.data)
        }
    }
    if (action.type === DELETE_FROM_CART) {
        return {
            ...state,
            cart: state.cart.filter(c => c !== action.data)
        }
    }

    return state
}
const coursesReducer=(state = initialCourses,action)=>{
    if (action.type === GET_COURSE_LIST) {
        return {
            ...state,
            courses: action.courses
        }
    }
    return state
}
export default createStore(combineReducers({cartReducer,coursesReducer}),composeWithDevTools(applyMiddleware(thunk)))