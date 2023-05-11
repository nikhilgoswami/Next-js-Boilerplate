import type { CounterState } from "./counter/types";

export interface RootState {
  counter?: CounterState;
}
