import React from "react"
import App from "./App"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "../state/reducer"

const store = createStore(reducer)

export default { title: "App" }

export const simple = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
