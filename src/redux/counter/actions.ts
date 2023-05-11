import type { AnyAction, Dispatch } from "redux";
import type { ActionType } from "typesafe-actions";
import { action } from "typesafe-actions";

import type { RootState } from "../type";
import { CONSTANTS } from "./constants";

export function increment() {
  return action(CONSTANTS.INCREMENT);
}

export function decrement() {
  return action(CONSTANTS.DECREMENT);
}

export const incrementAsync =
  (): any =>
  async (
    dispatch: Dispatch<AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    const state = getState();
    console.log(state);
    const incrementAction = action(CONSTANTS.INCREMENT);
    dispatch(incrementAction);
  };

const actions = { increment, decrement };
export type Actions = ActionType<typeof actions>;
