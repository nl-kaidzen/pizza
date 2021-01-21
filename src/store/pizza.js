/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizza: {
      dough: null,
      sauce: null,
      size: null,
      toppings: [],
    },
    price: 0,
  },
  reducers: {
    setPizza(store, action) {
      const { pizza } = action.payload;
      store.pizza = pizza;
    },
    setPrice(store, action) {
      const { price } = action.payload;
      store.price = price;
    },
  },
});

export const { setPizza, setPrice } = pizzaSlice.actions;
export default pizzaSlice.reducer;
