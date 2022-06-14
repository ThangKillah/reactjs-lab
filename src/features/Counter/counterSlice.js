import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter_test',
  initialState: 0,
  reducers: {
    increase: (state, action) => ++state,
    decrease: (state, action) => --state,
  },
});

const { actions, reducer } = counterSlice;
export const { increase, decrease } = actions;
export default reducer;
