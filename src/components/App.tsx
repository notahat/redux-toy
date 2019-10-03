import React from "react"

interface AppProps {
  counter: number
  increment: VoidFunction
  decrement: VoidFunction
  incrementBy10: VoidFunction
  decrementBy10: VoidFunction
  countDown: VoidFunction
}

export const App: React.FunctionComponent<AppProps> = ({
  counter,
  increment,
  decrement,
  incrementBy10,
  decrementBy10,
  countDown
}) => {
  return (
    <div>
      <button onClick={decrementBy10}>--</button>
      <button onClick={decrement}>-</button>
      {counter}
      <button onClick={increment}>+</button>
      <button onClick={incrementBy10}>++</button>

      <button onClick={countDown}>Count down</button>
    </div>
  )
}

export default App
