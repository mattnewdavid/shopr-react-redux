import React from "react";
import Header from "./Header/Header";
import Products from "./Product/Products";
import "./Layout.css";
import CartItems from "./Cart/Cart";
import { useSelector } from "react-redux";
const Layout = () => {
  const showCart = useSelector(state => state.cart.showCart)
 
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <div className="main-container">
          {!showCart && <Products />}
          {showCart && <CartItems />}
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default Layout;
