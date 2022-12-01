// import "./App.css";
// import { useEffect, useState } from "react";
// import Header from "./component/layout/Header/Header.js";
// //import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import WebFont from "webfontloader";
// import React from "react";
// import Footer from "./component/layout/Footer/Footer";
// import Home from "./component/Home/Home";
// import ProductDetails from "./component/Product/ProductDetails";
// import Products from "./component/Product/Products";
// import Search from "./component/Product/Search";
// import LoginSignUp from "./component/User/LoginSignUp";
// import store from "./store";
// import { loadUser } from "./actions/userAction";
// import UserOptions from "./component/layout/Header/UserOptions";
// import { useSelector } from "react-redux";
// import Profile from "./component/User/Profile";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
// import UpdateProfile from "./component/User/UpdateProfile";
// import UpdatePassword from "./component/User/UpdatePassword";
// import ForgotPassword from "./component/User/ForgotPassword";
// import ResetPassword from "./component/User/ResetPassword";
// import Cart from "./component/Cart/Cart";
// import Shipping from "./component/Cart/Shipping";
// import ConfirmOrder from "./component/Cart/ConfirmOrder";
// import axios from "axios";
// import Payment from "./component/Cart/Payment";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import OrderSuccess from "./component/Cart/OrderSuccess";
// import MyOrders from "./component/Order/MyOrders";
// import OrderDetails from "./component/Order/OrderDetails";
// import Dashboard from "./component/Admin/Dashboard.js";
// import ProductList from "./component/Admin/ProductList.js";
// import NewProduct from "./component/Admin/NewProduct";
// import UpdateProduct from "./component/Admin/UpdateProduct";
// import OrderList from "./component/Admin/OrderList";
// import ProcessOrder from "./component/Admin/ProcessOrder";
// import UsersList from "./component/Admin/UsersList";
// import UpdateUser from "./component/Admin/UpdateUser";
// import ProductReviews from "./component/Admin/ProductReviews";
// import Contact from "./component/layout/Contact/Contact";
// import About from "./component/layout/About/About";
// import NotFound from "./component/layout/Not Found/NotFound";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Switch, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
function App() {
  // const { isAuthenticated, user } = useSelector((state) => state.user);

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ["Roboto", "Droid Sans", "Chilanka"],
  //     },
  //   });

  //   store.dispatch(loadUser());

  //   getStripeApiKey();
  // }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {/* {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )} */}

      <Routes>
        {/* <Route  path="/" element={Home} />
        <Route  path="/product/:id" component={ProductDetails} />
        <Route  path="/products" element={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} /> */}

        <Route path="/" element={<Home />} />

        <Route exact path="product/:id" element={<ProductDetails />} />
        <Route exact path="products" element={<Products />} />
        <Route path="products/:keyword" element={<Products />} />
        <Route exact path="search" element={<Search />} />

      
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
