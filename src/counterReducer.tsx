import { Action } from "./actions"
import { CounterState } from "./counterState"

const counterReducer = (state: CounterState = 1, action: Action) => {
  switch (action.type) {
    case "increment":
      return state + action.by
    case "decrement":
      return state - 1
    default:
      return state
  }
}

export default counterReducer
