import {createStore, combineReducers, applyMiddleware} from "redux"
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { productDetailsReducer, productsReducer } from "./reducers/productReducer"

const reducer = combineReducers({
    products: productsReducer,
    product: productDetailsReducer,
   
})

let initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
