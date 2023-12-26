import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: {}, totalQuantity: 0 },
  reducers: {
    addItem: (state, action) => {
      const { title } = action.payload;
      const items = { ...state.items };

      if (!items[title]) {
        items[title] = { ...action.payload, qty: 1 };
      } else {
        items[title] = { ...items[title], qty: items[title].qty + 1 };
      }

      return { ...state, items, totalQuantity: state.totalQuantity + 1 };
    },

    removeItem: (state, action) => {
      const { title } = action.payload;
      const items = { ...state.items };

      if (items[title]) {
        if (items[title].qty > 1) {
          items[title] = { ...items[title], qty: items[title].qty - 1 };
          return { ...state, items, totalQuantity: state.totalQuantity - 1 };
        } else {
          delete items[title];
          return { ...state, items, totalQuantity: state.totalQuantity - 1 };
        }
      } else {
        // just for safety
        return state;
      }
    },

    clearCart: (state, action) => ({ items: {}, totalQuantity: 0 })
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
