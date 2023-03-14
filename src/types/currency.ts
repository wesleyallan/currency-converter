export type currency = 'BRL' | 'USD' | 'EUR' | 'GBP' | 'CHE';

export type currencySymbol = {
  [key in currency]: string;
};