import { MoreIcon } from '@/components/Icons';
import { useMemo } from 'react';
import { useFinancialWallets } from '../../api';
import { WalletCard } from './WalletCard';

export const Wallets = () => {
  const { data, isLoading, isFetching } = useFinancialWallets();
  const financialWalletsLoading = useMemo(() => isLoading || isFetching, [isLoading, isFetching]);

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center justify-between">
        <div className="title-3">Wallet</div>
        <MoreIcon className="text-text-2 hover:text-text-1 cursor-pointer" />
      </div>
      <div className="wallet-card-container">
        {data?.cards?.map((card) => (
          <WalletCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};
