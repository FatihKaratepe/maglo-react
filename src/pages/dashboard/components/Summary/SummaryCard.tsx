import { SkeletonLine } from '@/components';
import { CurrencyFormat } from '@/utils';
import { useMemo, type FC, type ReactNode } from 'react';

interface IFinancialSummary {
  amount?: number;
  currency?: string;
  change?: {
    percentage?: number;
    trend?: 'up' | 'down' | 'stable' | string;
  };
}

interface ISummaryCardProps extends IFinancialSummary {
  isLoading: boolean;
  title: string;
  icon: ReactNode;
}

export const SummaryCard: FC<ISummaryCardProps> = ({ isLoading = true, title, amount, currency, icon }) => {
  const formattedCurrency = useMemo(() => {
    if (!amount || !currency) return '';
    return CurrencyFormat(amount, currency);
  }, [amount, currency]);

  return (
    <div className="summary-card">
      <div className="summary-card-icon">{icon}</div>
      <div className="flex flex-col flex-1 gap-2.5">
        <div className="summary-card-title">{title}</div>
        {isLoading ? (
          <SkeletonLine className="w-full h-[25px]" />
        ) : (
          <div className="summary-card-amount">{formattedCurrency}</div>
        )}
      </div>
    </div>
  );
};
