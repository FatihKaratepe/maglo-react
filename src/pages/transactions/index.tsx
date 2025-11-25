import { TransactionsTable } from '@/components';
import { useMemo } from 'react';
import { useFinancialTransactions } from './api';

export default function Transactions() {
  const { data, isLoading, isFetching } = useFinancialTransactions({ limit: 20 });
  const financialTransactionsLoading = useMemo(() => isLoading || isFetching, [isLoading, isFetching]);

  return <TransactionsTable data={data?.transactions} loading={financialTransactionsLoading} loadingCount={20} />;
}
