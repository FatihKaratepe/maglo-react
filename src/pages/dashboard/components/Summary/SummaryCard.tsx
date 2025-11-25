import { EllipsisTooltip, SkeletonLine } from '@/components';
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
    <div className="summary-card overflow-hidden">
      <div className="summary-card-icon">{icon}</div>
      <div className="flex flex-col flex-1 gap-2.5 overflow-hidden">
        <div className="summary-card-title whitespace-nowrap">{title}</div>
        {isLoading ? (
          <SkeletonLine className="w-full h-[25px]" />
        ) : (
          <EllipsisTooltip className="summary-card-amount" text={formattedCurrency} />
        )}
      </div>
    </div>
  );
};
