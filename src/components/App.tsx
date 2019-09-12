import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { State } from "../state/types"
import { Dispatch } from "../actions/types"
import countDown from "../actions/countDown"

function App() {
  const counter = useSelector((state: State) => state.counter)
  const dispatch: Dispatch = useDispatch()

  const decrementBy10 = () => dispatch({ type: "DECREMENT_BY", by: 10 })
  const decrement = () => dispatch({ type: "DECREMENT", extra: 4 })
  const increment = () => dispatch({ type: "INCREMENT" })
  const incrementBy10 = () => dispatch({ type: "INCREMENT_BY", by: 10 })

  return (
    <div>
      <button onClick={decrementBy10}>--</button>
      <button onClick={decrement}>-</button>
      {counter}
      <button onClick={increment}>+</button>
      <button onClick={incrementBy10}>++</button>

      <button onClick={() => dispatch(countDown())}>Count down</button>
    </div>
  )
}

export default App
