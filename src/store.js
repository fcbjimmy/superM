import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cart.splice(index, 1);
    },
    reset: (state, action) => {
      console.log("reset");
    },
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

const { addProduct, removeProduct } = cartSlice.actions;

const cartQuantity = (state) => {
  const total = state.cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return total;
};

const cartValue = (state) => {
  const value = state.cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return value;
};

export { store, addProduct, removeProduct, cartQuantity, cartValue };
