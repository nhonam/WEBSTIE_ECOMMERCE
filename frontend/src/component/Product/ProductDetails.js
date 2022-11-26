import React, { Fragment } from "react";
import { Carousel } from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails ,getProducts} from "../../actions/productActions";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../Home/ProductCard";


const ProductDetails = () => {
  // const { id } = useParams();
  // const dispatch = useDispatch();
 
  // const { product, loading } = useSelector(
  //   (state) => state.product 
  // );

  // // useEffect(() => {
  // //   dispatch(getProductDetails(id));
   
  // // }, [dispatch, id]);

  // useEffect(() => {
  //   dispatch(getProducts());
   
  // }, [dispatch]);
  // console.log(id,"id")
  // console.log(product,"aaa")


  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
   
  }, [dispatch,id]);

  return (
    <Fragment>

      <div className='ProductDetails'>
        <div>
       {product.name}
        </div>

       
      </div>
    </Fragment>
    
  );
};

export default ProductDetails;
