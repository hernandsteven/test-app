import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getProducts } from '../api/productsAPI'
const initialState = {
    products: {},
    productsFetched: false
}

export const fetchProducts = createAsyncThunk('products/getProducts', async () => {
    const data = await getProducts();
    return data;
  });

export const productsSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.productsFetched = false
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.productsFetched = true
            state.products = action.payload
        })
    }

})


export default productsSlice.reducer;