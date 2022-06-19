import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {products: []},
  reducers: {
    addProduct: (state, {payload: {product}}) => {
      if (state.products.some(({id}) => id === product.id)) {
        state.products.find(({id}) => id === product.id).count++;
      } else {
        state.products.push({...product, count: 1});
      }
    },
  },
});

export default cartSlice.reducer;
export const {addProduct} = cartSlice.actions;