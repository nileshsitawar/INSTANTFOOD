import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const cartItem = state.items.find(
        
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id 
      );
      if (cartItem) {
        cartItem.itemCount++;    //
        cartItem.isAddedToCart = true; // 
      } else {
        state.items.push({
          ...action.payload,
          itemCount: 1,  // <--- kya hum aise ek naya varible add kar 
          //sakate hai jaise yaha pe itemCount = 1 kiya 
        });
      }
    },
    incrementItem: (state, action) => {
      const cartItem = state.items.find(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );
      cartItem.itemCount++;
    },
    decrementItem: (state, action) => {
      const cartItem = state.items.find(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );
      if (cartItem.itemCount == 1) {
        state.items = state.items.filter(
          (item) => item?.card?.info?.id !== action.payload?.card?.info?.id
        );
      } else {
        cartItem.itemCount--;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item?.card?.info?.id !== action.payload?.card?.info?.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { incrementItem, decrementItem, addItem, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;