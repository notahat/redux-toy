import React from "react"
import App from "./App"

export default { title: "App" }

export const simple = () => (
  <App
    counter={42}
    increment={() => {}}
    decrement={() => {}}
    incrementBy10={() => {}}
    decrementBy10={() => {}}
    countDown={() => {}}
  />
)
