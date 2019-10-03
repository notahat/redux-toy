import React from "react"
import { Dispatch } from "../actions/types"
import countDown from "../actions/countDown"

interface AppProps {
  counter: number
  dispatch: Dispatch
}

export const App: React.FunctionComponent<AppProps> = ({
  counter,
  dispatch
}) => {
  const decrementBy10 = () => dispatch({ type: "DECREMENT_BY", by: 10 })
  const decrement = () => dispatch({ type: "DECREMENT" })
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
