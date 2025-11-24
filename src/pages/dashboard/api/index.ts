import { FinancialApiFactory } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from './keys';

const financialApi = FinancialApiFactory();

export const useSummary = () => {
  return useQuery({
    queryKey: QueryKeys.financialSummary,
    queryFn: () => financialApi.financialSummaryGet(),
  });
};

export const useWorkingCapital = () => {
  return useQuery({
    queryKey: QueryKeys.workingCapital,
    queryFn: () => financialApi.financialWorkingCapitalGet(),
  });
};
