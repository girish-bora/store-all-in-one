import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(sessionStorage.getItem("cart")) || {
    cart: [],
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
            img: product.img,
            price: product.price,
            size: product.size,
            amount: 1,
            text: product.text,
            name: product.name,
            color: product.color,
            totalPrice: product.price,
          });
          state.totalAmount++;
          state.totalPrice += product.price;

          const saveState = JSON.stringify({
            cart: state.cart,
            totalAmount: state.totalAmount,
            totalPrice: state.totalPrice,
          });
          sessionStorage.setItem("cart",saveState);
        }
      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const product = action.payload;
      try {
        const exist = state.cart.find(
          (prod) =>
            prod.id === product.id &&
            prod.size === product.size &&
            prod.color === product.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (prod) =>
              prod.id !== product.id ||
              prod.size !== product.size ||
              prod.color !== product.color
          );
          state.totalAmount--;
          state.totalPrice -= product.price;
        } else {
          exist.amount--;
          exist.totalPrice -= product.price;
          state.totalAmount--;
          state.totalPrice -= product.price;
        }
        const saveState = JSON.stringify({
          cart: state.cart,
          totalAmount: state.totalAmount,
          totalPrice: state.totalPrice,
        });
        sessionStorage.setItem("cart",saveState);
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
