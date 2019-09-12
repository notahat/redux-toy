import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"

function App() {
  const counter = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "decrement" })}>Down</button>
      {counter}
      <button onClick={() => dispatch({ type: "increment" })}>Up</button>
    </div>
  )
}

export default App
