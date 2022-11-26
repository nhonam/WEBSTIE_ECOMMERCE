import axios from "axios"

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
  } from "../constants/productConstandts";

export const getProducts = () => async(dispatch)=> {
    try {
        dispatch({type: ALL_PRODUCT_REQUEST});
        const {data} = await axios.get("/api/v1/products")
      
        if(data) {

          dispatch({
              type: ADMIN_PRODUCT_SUCCESS,
              payload : data.products
          } 
          
          )
     
        }
         
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload : error.response.data.message
        })
    }
}

// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
    try {
     dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/product/${id}`);
   
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
      return data.product
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

