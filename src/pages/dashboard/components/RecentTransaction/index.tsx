import { TransactionsTable } from '@/components';
import { ExpandIcon } from '@/components/Icons';
import { useMemo, type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useFinancialTransactions } from '../../api';

export const RecentTransaction: FC = () => {
  const { data, isLoading, isFetching } = useFinancialTransactions({ limit: 3 });
  const financialTransactionsLoading = useMemo(() => isLoading || isFetching, [isLoading, isFetching]);

  return (
    <div className="flex flex-col gap-5 border border-gray-3 rounded-[10px] py-5 pr-[19px] pl-[25px]">
      <div className="flex items-center justify-between">
        <div className="title-3">Recent Transaction</div>
        <NavLink
          to={'/transactions'}
          className="flex items-center gap-1.5 text-secondary text-base leading-[15px] font-semibold"
        >
          View All
          <ExpandIcon className="-rotate-90" />
        </NavLink>
      </div>
      <TransactionsTable loading={financialTransactionsLoading} data={data?.transactions} />
    </div>
  );
};
