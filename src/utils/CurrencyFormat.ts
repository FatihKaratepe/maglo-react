import { Locale } from './Localea';

export const CurrencyFormat = (
  amount: number,
  currency: string,
  minimumFractionDigits: number = amount % 1 === 0 ? 0 : 2
) => {
  return new Intl.NumberFormat(Locale(), {
    style: 'currency',
    currency,
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: 2,
  }).format(amount);
};
