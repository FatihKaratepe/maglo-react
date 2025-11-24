import { FinancialApiFactory, type FinancialApiFinancialTransactionsRecentGetRequest } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from './keys';

const financialApi = FinancialApiFactory();

export const useSummary = () => {
  return useQuery({
    queryKey: QueryKeys.financialSummary,
    queryFn: () => financialApi.financialSummaryGet(),
    select: (res) => res.data.data,
  });
};

export const useWorkingCapital = () => {
  return useQuery({
    queryKey: QueryKeys.workingCapital,
    queryFn: () => financialApi.financialWorkingCapitalGet(),
    select: (res) => res.data.data,
  });
};

export const useFinancialTransactions = (requestParameters: FinancialApiFinancialTransactionsRecentGetRequest) => {
  return useQuery({
    queryKey: QueryKeys.financialTransactions,
    queryFn: () => financialApi.financialTransactionsRecentGet(requestParameters),
    select: (res) => res.data.data,
  });
};

export const useFinancialWallets = () => {
  return useQuery({
    queryKey: QueryKeys.financialWallets,
    queryFn: () => financialApi.financialWalletGet(),
    select: (res) => res.data.data,
  });
};

export const useFinancialTransfersScheduled = () => {
  return useQuery({
    queryKey: QueryKeys.financialTransfersScheduled,
    queryFn: () => financialApi.financialTransfersScheduledGet(),
    select: (res) => res.data.data,
  });
};
