import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
      showCart: false,
      showModal: false,
    addedToCart: false
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existing = state.itemsList.find((item) => item.id === newItem.id);

      if (existing) {
        existing.quantity++;
          existing.totalPrice += newItem.price;
          
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
            name: newItem.name,
          imgURL: newItem.imgURL
        });
          state.totalQuantity++
         
          }
          
    },
      removeFromCart: (state, action) => {
          const id = action.payload;
          const existingItem = state.itemsList.find(item => item.id === id)

          if (existingItem.quantity === 1) {
              state.itemsList = state.itemsList.filter(item => item.id !== id)
              state.totalQuantity --;
          } else {
              existingItem.quantity--;
              existingItem.totalPrice += existingItem.price
          }
      },
      deleteFromCart: (state, action) => {
          const id = action.payload;
          state.itemsList = state.itemsList.filter((item) => item.id !== id);
          state.totalQuantity--;
      },
    setShowCart: (state) => {
      state.showCart = true;
      },
      closeCart: (state) => {
        state.showCart = false
      },
      showModal: (state) => {
          state.showModal = true;
      },
      closeModal: (state) => {
          state.showModal = false
      },
      clearCart: (state) => {
          state.itemsList = [];
              state.totalQuantity = 0
      }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
