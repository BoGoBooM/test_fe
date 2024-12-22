import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    editItem: (state, action) => {
      const { id, updatedItem } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index] = updatedItem;
      }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, editItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
