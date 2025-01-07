import { createSlice } from "@reduxjs/toolkit";

//initial state  :
const initialState = { value: 1 };

export const multiplySlice = createSlice({
  name: "counter1",
  initialState: initialState,
  reducers: {
    multiplyBy2: (state) => {
      state.value *= 2;
    },
  },
});

export const { multiplyBy2 } = multiplySlice.actions;
export default multiplySlice.reducer;
