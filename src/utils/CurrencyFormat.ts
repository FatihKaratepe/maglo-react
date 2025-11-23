import { Locale } from './Locale';

export const CurrencyFormat = (number: number, currency: string) => {
  return new Intl.NumberFormat(Locale(), { style: 'currency', currency }).format(number);
};
