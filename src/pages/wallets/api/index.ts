import { FinancialApiFactory } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from './keys';

const financialApi = FinancialApiFactory();

export const useFinancialWallets = () => {
  return useQuery({
    queryKey: QueryKeys.financialWallets,
    queryFn: () => financialApi.financialWalletGet(),
    select: (res) => res.data.data,
  });
};
