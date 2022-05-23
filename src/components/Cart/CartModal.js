import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./cart-modal.css";

export const Modal = () => {
    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(cartActions.closeModal())
    }
    const clearCart = () => {
        dispatch(cartActions.clearCart())
        dispatch(cartActions.closeModal());
    }
  return (
    <aside className="modal" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-heder">
          <h4>Cart will be cleared</h4>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to clear Cart?</p>
        </div>
              <div className="modal-footer">
                  <button onClick={clearCart} className='success-btn'>Yes</button>
                  <button onClick={closeModal} className='cancel-btn'>Cancel</button>
        </div>
      </div>
    </aside>
  );
};
