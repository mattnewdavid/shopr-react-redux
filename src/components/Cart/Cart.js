import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./CartModal";
import { cartActions } from "../../store/cart-slice";
const CartItems = () => {
  const showModal = useSelector((state) => state.cart.showModal);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.itemsList);
  let total = 0;

  cartItems.forEach((item) => {
    total += item.totalPrice;
  });

  const closeCart = () => {
    dispatch(cartActions.closeCart());
  };
  const openModal = () => {
    dispatch(cartActions.showModal());
  };
  return (
    <div className="cart-container" onClick={(e) => e.stopPropagation()}>
      {showModal && <Modal />}
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="cart-actions" onClick={closeCart}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>

      <ul>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              price={item.price}
              name={item.name}
              total={item.totalPrice}
              quantity={item.quantity}
              img={item.imgURL}
            />
          );
        })}
        {cartItems.length === 0 && <p>Cart is Empty!</p>}
      </ul>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
          <button className="clearBtn" onClick={openModal}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
