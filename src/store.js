import { ConfigureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: () => {},
    removeProduct: () => {},
    reset: () => {},
  },
});

const store = ConfigureStore({ reducer: cartSlice.reducer });
