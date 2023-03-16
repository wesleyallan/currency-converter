import type { IHomeState, TReducerAction } from "../../types/currency";

export const initialState: IHomeState = {
  from: "BRL",
  exchangeRate: 0.1904,
  to: "USD",
  fromValue: 1000,
  toValue: 1000 * 0.1904,
};

export function reducer(state: IHomeState, action: TReducerAction) {
  let newState: IHomeState = { ...state };
  switch (action.type) {
    case "SET_FROM":
      newState = { ...state, from: action.payload };
      newState.toValue = newState.fromValue * newState.exchangeRate;
      return newState;
    case "SET_TO":
      newState = { ...state, to: action.payload };
      newState.toValue = newState.fromValue * newState.exchangeRate;
      return newState;
    case "SET_FROM_VALUE":
      newState = { ...state, fromValue: action.payload };
      newState.toValue = newState.fromValue * newState.exchangeRate;
      return newState;
    case "SET_EXCHANGE_RATE":
      newState = { ...state, exchangeRate: action.payload };
      newState.toValue = newState.fromValue * newState.exchangeRate;
      return newState;
    case "SWITCH_CURRENCIES":
      return { ...state, from: state.to, to: state.from };
    default:
      console.log('Ação invalida!')
      return state;
  }
};