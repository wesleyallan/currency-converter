export type currency = "BRL" | "USD" | "EUR" | "GBP" | "CHF";

export type currencySymbol = {
  [key in currency]: string;
};

export interface IHomeState {
  from: currency;
  to: currency;
  exchangeRate: number;
  fromValue: number;
  toValue: number;
}

export type TReducerAction =
  | { type: "SET_FROM"; payload: currency }
  | { type: "SET_TO"; payload: currency }
  | { type: "SET_FROM_VALUE"; payload: number }
  | { type: "SET_EXCHANGE_RATE"; payload: number }
  | { type: "SWITCH_CURRENCIES" };

export type TReducerAction2 = {
  type: "SET_FROM" | "SET_TO" | "SET_FROM_VALUE" | "SET_EXCHANGE_RATE";
  payload: currency | number;
};