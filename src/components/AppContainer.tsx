import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "../actions/types"
import counterValue from "../selectors/counterValue"
import App from "./App"

const AppContainer: React.FunctionComponent = () => {
  const counter = useSelector(counterValue)
  const dispatch: Dispatch = useDispatch()
  return <App counter={counter} dispatch={dispatch} />
}

export default AppContainer
