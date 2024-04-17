import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.unitPrice,
        });
      } else {
        return;
      }
    },

    // updateQuantity(state, action) {
    //   const typeAction = action.payload.type;

    //   if (typeAction === 'decrease') {
    //     cartSlice.caseReducers.deleteItem(state, action);
    //   }

    //   if (typeAction === 'increase') {
    //     cartSlice.caseReducers.addItemToCart(state, action);
    //   }
    // },

    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    increaseItemQuantity(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      existingItem.quantity++;
      existingItem.totalPrice += existingItem.unitPrice;
    },

    decreaseItemQuantity(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      existingItem.quantity--;
      existingItem.totalPrice -= existingItem.unitPrice;

      if (existingItem.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },

    deleteAllItem(state) {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  // updateQuantity,
  deleteItem,
  deleteAllItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
