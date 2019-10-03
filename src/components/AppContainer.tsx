import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "../actions/types"
import counterValue from "../selectors/counterValue"
import countDown from "../actions/countDown"
import App from "./App"

const AppContainer: React.FunctionComponent = () => {
  const counter = useSelector(counterValue)
  const dispatch: Dispatch = useDispatch()

  const increment = () => dispatch({ type: "INCREMENT" })
  const decrementBy10 = () => dispatch({ type: "DECREMENT_BY", by: 10 })
  const decrement = () => dispatch({ type: "DECREMENT" })
  const incrementBy10 = () => dispatch({ type: "INCREMENT_BY", by: 10 })
  const foo = () => dispatch(countDown())

  return (
    <App
      counter={counter}
      increment={increment}
      decrement={decrement}
      decrementBy10={decrementBy10}
      incrementBy10={incrementBy10}
      countDown={foo}
    />
  )
}

export default AppContainer
