
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { productActions } from '../../store/product-slice';
import './product-modal.css'

const ProductModal = () => {
    const dispatch = useDispatch()
  const product = useSelector(state => state.product.productitem)
  const showCart = () => {
    dispatch(cartActions.setShowCart());
    dispatch(productActions.closeProductModal())
  };

      const addToCart = () => {
        dispatch(
          cartActions.addToCart({
            name: product.name,
            id: product.id,
            price: product.price,
            imgURL: product.imgURL,
          })
        );
      };

    const closeProductModal = () => {
        dispatch(productActions.closeProductModal())
    }
  return (
    <aside className="product-modal" onClick={closeProductModal}>
      <div className="product-modal-container" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeProductModal} className='product-modal-close'><FontAwesomeIcon icon={faClose} /></button>
        <div className="product-modal-header">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </div>
        <div className="product-modal-body">
          <img src={product.imgURL} alt={product.name} />
          <div className='product-modal-description'>
            <p>Description</p>
            <small>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              sapiente mollitia incidunt eaque exercitationem doloribus eos
              nesciunt distinctio delectus reprehenderit aut, ipsam numquam, ab
              qui cupiditate eveniet quo sequi. Amet.
            </small>
          </div>
        </div>
        <div className="product-modal-footer">
          <button onClick={addToCart} className="add-btn">
            Add to Cart <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button className="cart-btn" onClick={showCart}>
            View Cart<FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default ProductModal