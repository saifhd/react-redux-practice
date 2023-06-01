import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../Feature/Counter/CounterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleIncrementByAmount = () =>{
    dispatch(incrementByAmount(5))
  }

  return (
    <div>
        <h1>Counter</h1>
        <h3>{count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrementByAmount}>Increment By Amount</button>
    </div>
  )
}

export default Counter