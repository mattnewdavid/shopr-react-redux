import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { productActions } from "../../store/product-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch()
 

  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
      imgURL
    }))
  }
  const openProduct = () => {
    dispatch(productActions.showProductModal())
    dispatch(productActions.showPrdouctItem({
      name,
      id,
      price,
      imgURL
    }))
  }
  return (
    <div className="card">
      <div className="card-img">
        <article className="card-tag">SALE</article>
        <img src={imgURL} alt={name} />
      </div>
      <div className="card-content">
        <h4>{name}</h4>
        <p>$ {price}</p>
      </div>
      <div className="card-button">
        <button onClick={addToCart} className='add-btn'> Add to Cart</button>
        <button onClick={openProduct} className="view-btn">
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
    </div>
  );
};

export default Product;
