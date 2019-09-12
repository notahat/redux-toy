import { ThunkDispatch } from "redux-thunk"
import { CounterState } from "./counterState"

export interface IncrementAction {
  type: "increment"
  by: number
}

export interface DecrementAction {
  type: "decrement"
}

export type Action = IncrementAction | DecrementAction

export type Dispatch = ThunkDispatch<CounterState, void, Action>

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function incrementAsync(by: number) {
  return async (dispatch: Dispatch) => {
    await timeout(1000)
    dispatch({ type: "increment", by })
  }
}
