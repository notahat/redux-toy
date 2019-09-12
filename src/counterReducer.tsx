export type CounterState = number

export interface IncrementAction {
  type: "increment"
}

export interface DecrementAction {
  type: "decrement"
}

export type CounterAction = IncrementAction | DecrementAction

const counterReducer = (state: CounterState = 1, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    default:
      return state
  }
}

export default counterReducer
