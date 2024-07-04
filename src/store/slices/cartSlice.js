import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      try {
        const exist = state.cart.find(
          (prod) =>
            prod.id === product.id &&
            prod.size === product.size &&
            prod.color === product.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += product.price;
          state.totalAmount++;
          state.totalPrice += product.price;
        } else {
          state.cart.push({
            id: product.id,
            price: product.price,
            size: product.size,
            amount: 1,
            name: product.name,
            color: product.color,
            totalPrice: product.price,
          });
          state.totalAmount++;
          state.totalPrice += product.price;
        }
      } catch (err) {
        return err;
      }
    },
    //addToCart(state,action){}
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
