import type { WalletCardsInner } from '@/apis';
import { CardChipIcon, MastercardIcon, VisaIcon, WifiIcon } from '@/components/Icons';
import { cn } from '@/utils';
import { type FC } from 'react';

interface IWalletCardProps {
  data: WalletCardsInner | undefined;
}

export const WalletCard: FC<IWalletCardProps> = ({ data }) => {
  const className = data?.isDefault ? 'dark-card' : cn('transparent-card');

  return (
    <div className={cn('wallet-card', className)}>
      <div className="wallet-card-top">
        <div className="wallet-card-header">
          <div className="wallet-card-title">{data?.bank?.split('|')[0]}</div>
          <div className="wallet-card-bank">{data?.bank?.split('|')[1]}</div>
        </div>
        <div className="wallet-card-icons">
          <CardChipIcon className={data?.isDefault ? 'w-[30px] h-6' : 'w-10 h-[30px]'} />
          <WifiIcon className="text-[#363B41]" />
        </div>
      </div>
      <div className="wallet-card-bottom">
        <div className="wallet-card-number">{data?.cardNumber}</div>
        <div className="wallet-card-footer">
          <div className="wallet-card-expire">
            {data?.expiryMonth}/{data?.expiryYear}
          </div>
          <div className="wallet-card-brand">{data?.network === 'Visa' ? <VisaIcon /> : <MastercardIcon />}</div>
        </div>
      </div>
    </div>
  );
};
