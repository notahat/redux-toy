import { combineReducers, Reducer } from "redux"
import { Action } from "../actions/types"
import { State } from "./types"
import counterReducer from "./counterReducer"

const reducer: Reducer<State, Action> = combineReducers({
  counter: counterReducer
})

export default reducer
