import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counter/counterSlice.js";
import { multiplyBy2 } from "../app/features/counter-multiply/multiplySlice.js";

const Counter = () => {
  //Read the data from the store
  const count = useSelector((state) => state.counter.value);
  const count1 = useSelector((state) => state.counter1.value);

  //Changing the data by sending "actions" to the store.
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <h1>{count1}</h1>
      <br />
      <button onClick={() => dispatch(multiplyBy2())}> * </button>
    </div>
  );
};

export default Counter;
