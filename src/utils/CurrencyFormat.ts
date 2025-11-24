import { Locale } from './Locale';

export const CurrencyFormat = (number: number, currency: string) => {
  return new Intl.NumberFormat(Locale(), {
    style: 'currency',
    currency,
    minimumFractionDigits: number % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(number);
};
