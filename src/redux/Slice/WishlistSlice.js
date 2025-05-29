import { createSlice } from "@reduxjs/toolkit";

// Try to load wishlist from localStorage if available
let savedWishlist = null;
if (typeof window !== 'undefined') {
  try {
    savedWishlist = JSON.parse(localStorage.getItem('wishlist'));
  } catch (error) {
    console.error('Failed to parse wishlist from localStorage:', error);
  }
}

const initialState = savedWishlist || {
  items: [],
};

// Helper function to save wishlist to localStorage
const saveWishlist = (state) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('wishlist', JSON.stringify(state));
  }
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      
      // Validate the item has required properties
      if (!newItem || !newItem._id) {
        console.error('Invalid item added to wishlist:', newItem);
        return;
      }
      
      const existingItem = state.items.find(item => item._id === newItem._id);
      
      if (!existingItem) {
        state.items.push(newItem);
        saveWishlist(state);
      }
    },
    removeFromWishlist: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item._id !== id);
      saveWishlist(state);
    },
    toggleWishlistItem: (state, action) => {
      const item = action.payload;
      const existingItemIndex = state.items.findIndex(i => i._id === item._id);
      
      if (existingItemIndex >= 0) {
        // Remove item if it exists
        state.items.splice(existingItemIndex, 1);
      } else {
        // Add item if it doesn't exist
        state.items.push(item);
      }
      saveWishlist(state);
    },
    clearWishlist: (state) => {
      state.items = [];
      
      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('wishlist');
      }
    },
  },
});

export const { 
  addToWishlist, 
  removeFromWishlist, 
  toggleWishlistItem, 
  clearWishlist 
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
