import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        showProduct: false,
        prdouctitem: {},
    },
    reducers: {
        showProductModal: (state) => {
            state.showProduct = true
        },
        closeProductModal: (state) => {
            state.showProduct = false
        },
        showPrdouctItem: (state, action) => {
            const item = action.payload
            state.productitem = {
                name: item.name,
                id: item.id,
                price: item.price,
                imgURL: item.imgURL
            }
        }
    }
})

export const productActions = productSlice.actions;

export default productSlice