import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type CountState = number;

const initialState: CountState = 0;

type Payload = {
  quantity: number;
};

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment(state, {payload}: PayloadAction<Payload>) {
      return state + payload.quantity;
    },
    decrement(state, {payload}: PayloadAction<Payload>) {
      return state - payload.quantity;
    },
  },
});

export const {increment, decrement} = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
