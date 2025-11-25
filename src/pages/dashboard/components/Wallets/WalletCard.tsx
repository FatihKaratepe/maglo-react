import type { WalletCardsInner } from '@/apis';
import { AmericanExpressIcon, CardChipIcon, MastercardIcon, VisaIcon, WifiIcon } from '@/components/Icons';
import { cn } from '@/utils';
import { useMemo, type FC } from 'react';

interface IWalletCardProps {
  data: WalletCardsInner | undefined;
}

export const WalletCard: FC<IWalletCardProps> = ({ data }) => {
  const className = data?.isDefault ? 'dark-card' : 'transparent-card';
  const bankInfo = useMemo(() => {
    if (data && data.bank) {
      const [title, bankName] = data.bank.split('|');
      return { title, bankName };
    }
    return undefined;
  }, [data]);

  return (
    <div className={cn('wallet-card', className)}>
      <div className="wallet-card-top">
        <div className="wallet-card-header">
          <div className="wallet-card-title">{bankInfo?.title}</div>
          <div className="wallet-card-bank">{bankInfo?.bankName}</div>
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
          <div className="wallet-card-brand">
            {data?.network === 'Visa' ? (
              <VisaIcon />
            ) : data?.network === 'Mastercard' ? (
              <MastercardIcon />
            ) : (
              <AmericanExpressIcon />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
