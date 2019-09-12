import { Reducer } from "redux"
import { Action } from "../actions"

export type CounterState = number

const counterReducer: Reducer<CounterState, Action> = (state = 1, action) => {
  switch (action.type) {
    case "DECREMENT":
      return state - 1
    case "DECREMENT_BY":
      return state - action.by
    case "INCREMENT":
      return state + 1
    case "INCREMENT_BY":
      return state + action.by
    default:
      return state
  }
}

export default counterReducer
