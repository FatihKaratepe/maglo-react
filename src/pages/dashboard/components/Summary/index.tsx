import type { FinancialSummary } from '@/apis';
import { WalletAddIcon, WalletIcon } from '@/components/Icons';
import { useMemo, type ReactNode } from 'react';
import { useSummary } from '../../api';
import { SummaryCard } from './SummaryCard';

export const Summary = () => {
  const { data: summaryData, isLoading, isFetching } = useSummary();
  const summaryLoading = useMemo(() => isLoading || isFetching, [isLoading, isFetching]);

  type SummaryKey = keyof Omit<FinancialSummary, 'lastUpdated'>;
  const summaryItems: { title: string; icon: ReactNode; key: SummaryKey }[] = [
    {
      title: 'Total balance',
      icon: <WalletIcon className="w-5 h-5" />,
      key: 'totalBalance',
    },
    {
      title: 'Total spending',
      icon: <WalletIcon className="w-5 h-5" />,
      key: 'totalExpense',
    },
    {
      title: 'Total saved',
      icon: <WalletAddIcon className="w-5 h-5" />,
      key: 'totalSavings',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
      {summaryItems.map((item) => {
        const data = summaryData?.data.data?.[item.key];
        return (
          <SummaryCard
            key={item.key}
            title={item.title}
            icon={item.icon}
            currency={data?.currency}
            amount={data?.amount}
            change={data?.change}
            isLoading={summaryLoading}
          />
        );
      })}
    </div>
  );
};
