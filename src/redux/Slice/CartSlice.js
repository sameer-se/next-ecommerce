import { createSlice } from "@reduxjs/toolkit";

// Try to load cart from localStorage if available
let savedCart = null;
if (typeof window !== 'undefined') {
  try {
    savedCart = JSON.parse(localStorage.getItem('cart'));
  } catch (error) {
    console.error('Failed to parse cart from localStorage:', error);
  }
}

const initialState = savedCart || {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

// Helper function to recalculate cart totals
const recalculateCart = (state) => {
  state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
  state.totalAmount = state.items.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );
  
  // Save to localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(state));
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      
      // Validate the item has required properties
      if (!newItem || !newItem._id || typeof newItem.price !== 'number') {
        console.error('Invalid item added to cart:', newItem);
        return;
      }
      
      const existingItem = state.items.find(item => item._id === newItem._id);
      
      if (!existingItem) {
        // Add new item with quantity from payload or default to 1
        state.items.push({
          ...newItem,
          quantity: newItem.quantity || 1,
          totalPrice: (newItem.price || 0) * (newItem.quantity || 1)
        });
      } else {
        // Increment quantity by the payload quantity or by 1
        const quantityToAdd = newItem.quantity || 1;
        existingItem.quantity += quantityToAdd;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
      
      recalculateCart(state);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item._id === id);
      
      if (!existingItem) return;
      
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item._id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
      
      recalculateCart(state);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item._id === id);
      
      if (!existingItem || quantity < 1) return;
      
      existingItem.quantity = quantity;
      existingItem.totalPrice = existingItem.price * quantity;
      
      recalculateCart(state);
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item._id !== id);
      
      recalculateCart(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      
      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');
      }
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  updateCartItemQuantity, 
  removeItemFromCart, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;
