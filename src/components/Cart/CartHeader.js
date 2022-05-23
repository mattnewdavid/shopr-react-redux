import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { cartActions } from "../../store/cart-slice";
const Cart = () => {
  const dispatch = useDispatch()
  const showCart = () => {
    dispatch(cartActions.setShowCart())
  }
  const quantity = useSelector(state => state.cart.totalQuantity)
  return (
    <div className="cartIcon">
      <FontAwesomeIcon icon={faCartShopping} onClick={showCart} />
      <p>{quantity}</p>
    </div>
  );
};

export default Cart;
