import { ThunkDispatch } from "redux-thunk"
import { State } from "../state"

export interface DecrementAction {
  type: "DECREMENT"
}

export interface DecrementByAction {
  type: "DECREMENT_BY"
  by: number
}

export interface IncrementAction {
  type: "INCREMENT"
}

export interface IncrementByAction {
  type: "INCREMENT_BY"
  by: number
}

export type Action =
  | DecrementAction
  | DecrementByAction
  | IncrementAction
  | IncrementByAction

export type Dispatch = ThunkDispatch<State, void, Action>
