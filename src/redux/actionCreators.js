import { ADD_TO_CART } from "./actions"
import { DELETE_FROM_CART,GET_COURSE_LIST } from "./actions"
import axios from 'axios';
const addToCart = id =>({
    type: ADD_TO_CART,
    data: id
})
const deleteFromCart = id =>({
    type: DELETE_FROM_CART,
    data: id
})
const getCourseList =()=>dispatch=>{
    axios.get('http://my-json-server.typicode.com/diegosullon/json-db/cursos').then
    (response=>{
        return dispatch({
            type: GET_COURSE_LIST,
            courses: response.data
        })
    })
}
export {addToCart,deleteFromCart,getCourseList }