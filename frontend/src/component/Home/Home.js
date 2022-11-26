import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "./ProductCard.js";
import "./Home.css";
import MetaData from "../layout/MetaData.js";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../actions/productActions";
import Loading from "../layout/Loading/Loading.js";
const product = {
  name: "Blue Tshirt",
  imagees: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "$33",
  _id: "abhishek",
};

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
   
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loading/>
      ) : (
        <Fragment>
          <MetaData title="Home Page" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>hhh</button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
