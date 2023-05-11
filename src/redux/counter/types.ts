import type { ActionType } from "typesafe-actions";

import type * as actions from "./actions";

export interface CounterState {
  value: number;
}

export type CounterActions = ActionType<typeof actions>;
