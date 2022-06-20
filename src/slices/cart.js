import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {products: []},
  reducers: {
    addProduct: (state, {payload: {product}}) => {
      if (state.products.some(({id}) => id === product.id)) {
        return;
      }
      state.products.push(product);
    },
    removeProduct: (state, {payload: {productId}}) => {
      state.products = state.products.filter(({id}) => id !== productId);
    },
  },
});

export default cartSlice.reducer;
export const {addProduct, removeProduct} = cartSlice.actions;