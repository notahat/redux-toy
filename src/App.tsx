import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch, incrementAsync } from "./actions"
import { CounterState } from "./counterState"

function App() {
  const counter = useSelector((state: CounterState) => state)
  const dispatch: Dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(incrementAsync(3))}>+</button>
      <div>{counter}</div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  )
}

export default App
