import { createSlice } from '@reduxjs/toolkit';

export const souvenirsUnit = createSlice({
  name: 'souvenirs',
  initialState: {
    selectedCategory: "SPAIN"
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const getSelectedCategory = (state) => state.souvenirs.selectedCategory;
export const { filterCategory } = souvenirsUnit.actions;
export default souvenirsUnit.reducer;
