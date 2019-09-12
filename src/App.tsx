import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { CounterState } from "./counterReducer"

function App() {
  const counter = useSelector((state: CounterState) => state)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <div>{counter}</div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  )
}

export default App
