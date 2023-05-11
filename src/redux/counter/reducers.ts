import { CONSTANTS } from "./constants";
import type { CounterActions, CounterState } from "./types";

const init: CounterState = {
  value: 0,
};
export function counterReducer(
  state: CounterState = init,
  action: CounterActions
): CounterState {
  switch (action.type) {
    case CONSTANTS.INCREMENT:
      return { ...state, value: state.value + 1 };
    case CONSTANTS.DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
