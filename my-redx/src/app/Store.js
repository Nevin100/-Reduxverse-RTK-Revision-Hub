//Creating Store :
import { configureStore } from "@reduxjs/toolkit";

//import counterReducer from counterSlice.js
import counterReducer from "./features/counter/counterSlice.js";

//import multiplyReducer from multiplSlice.js
import multiplyreducer from "./features/counter-multiply/multiplySlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter1: multiplyreducer,
  },
});
