import { ErrorCard, SkeletonLine } from '@/components';
import { MoreIcon } from '@/components/Icons';
import { cn } from '@/utils';
import { useMemo } from 'react';
import { useFinancialWallets } from '../../api';
import { WalletCard } from './WalletCard';

export const Wallets = () => {
  const { data, isLoading, isFetching, isError } = useFinancialWallets();
  const financialWalletsLoading = useMemo(() => isLoading || isFetching, [isLoading, isFetching]);

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center justify-between">
        <div className="title-3">Wallet</div>
        <MoreIcon className="text-text-2 hover:text-text-1 cursor-pointer" />
      </div>
      <div className="wallet-card-container">
        {isError ? (
          <ErrorCard className="w-full h-[343px]" />
        ) : financialWalletsLoading ? (
          Array.from({ length: 2 }).map((_, i) => (
            <SkeletonLine
              key={String(i)}
              className={cn('wallet-card', i === 0 ? 'h-[210px]' : 'transparent-card before:hidden h-[195px]')}
            />
          ))
        ) : (
          data?.cards?.map((card) => <WalletCard key={card.id} data={card} />)
        )}
      </div>
    </div>
  );
};
