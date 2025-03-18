import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../FeatureRedux/testReducer/testReducer";

const Setting = () => {  
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
};

export default Setting; // ✅ Also ensure it's exported as "Setting"
