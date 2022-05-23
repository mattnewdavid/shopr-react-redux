import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../../store/cart-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const CartItem = ({ name, quantity, total, price, id, img }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  const deleteHandler = () => {
    dispatch(cartActions.deleteFromCart(id))
  }
  return (
    <div className="cartItem">
      <div>
        <div className="cart-img">
          <img src={img} alt={name} />
        </div>
      </div>
      <div className="cart-content">
        <h4> {name}</h4>
        <p>${price}</p>
        <p>Total ${total}</p>
      </div>
      <div className="cart-control">
        <button className="cart-actions" onClick={removeHandler}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <p>{quantity}</p>
        <button className="cart-actions" onClick={addHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button className="cart-actions" onClick={deleteHandler}>
          <FontAwesomeIcon icon={faCancel} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
