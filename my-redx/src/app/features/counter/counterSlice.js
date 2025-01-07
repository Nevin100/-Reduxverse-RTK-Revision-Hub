import { createSlice } from "@reduxjs/toolkit";

//Initial State :
const initialState = { value: 0 };

export const counterSlice = createSlice({
  name: "counter", // name
  initialState: initialState, //initialState
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; //export actions
export default counterSlice.reducer;
