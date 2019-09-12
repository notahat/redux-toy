import { combineReducers, Reducer } from "redux"
import counterReducer, { CounterState } from "./counterReducer"
import { Action } from "../actions"

export type State = {
  counter: CounterState
}

export const reducer: Reducer<State, Action> = combineReducers({
  counter: counterReducer
})
