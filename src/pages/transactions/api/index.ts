import { FinancialApiFactory, type FinancialApiFinancialTransactionsRecentGetRequest } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from './keys';

const financialApi = FinancialApiFactory();

export const useFinancialTransactions = (requestParameters: FinancialApiFinancialTransactionsRecentGetRequest) => {
  return useQuery({
    queryKey: QueryKeys.financialTransactions,
    queryFn: () => financialApi.financialTransactionsRecentGet(requestParameters),
    select: (res) => res.data.data,
  });
};
