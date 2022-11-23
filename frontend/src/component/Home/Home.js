import React, { Fragment } from "react";
import ProductCard from "./ProductCard.js";
import "./Home.css";
const Home = () => {
  return <Fragment>
    <div className="banner">
    <p>Welcome to Ecommerce</p>
    <h1>FIND AMAZING PRODUCTS BELOW</h1>
    <a href="#container">
              <button>
                hhh
              </button>
            </a>
    </div>
    <h2 className="homeHeading">Featured Products</h2>
    <div className="container" id="container">
        {/* <Product product={product} /> */}
    </div>
  </Fragment>;
};

export default Home;
