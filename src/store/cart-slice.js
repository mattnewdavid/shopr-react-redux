import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;

            const existing = state.itemsList.find((item) => item.id === newItem.id)
            
            if (existing) {
                existing.quantity++;
                existing.price += newItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
            }
         },
        removeFromCart: () => { },
        setShowCart: (state) => { 
            state.showCart = true
        },
        
    }
})

export const cartActions = cartSlice.actions
export default cartSlice;