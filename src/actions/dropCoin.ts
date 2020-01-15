import { Color } from "../types";

export interface DropCoinAction {
  type: "DROP_COIN";
  payload: {
    column: number;
    color: Color;
  };
}

export function dropCoin(column: number, color: Color): DropCoinAction {
  return {
    type: "DROP_COIN",
    payload: { column, color }
  };
}

export interface ResetGameAction {
  type: "RESET_GAME";
  payload: {};
}

export function resetGame(): ResetGameAction {
  return {
    type: "RESET_GAME",
    payload: {}
  };
}
