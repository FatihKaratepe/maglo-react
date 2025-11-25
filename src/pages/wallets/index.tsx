import type { WalletCardsInnerNetworkEnum } from '@/apis';
import { ErrorCard, SkeletonTable } from '@/components';
import { AmericanExpressIcon, MastercardIcon, VisaIcon } from '@/components/Icons';
import { Fragment, useMemo } from 'react';
import { useFinancialWallets } from './api';

export default function Wallets() {
  const { data, isLoading, isFetching, isError } = useFinancialWallets();
  const financialWalletsLoading = useMemo(() => isLoading || isFetching, [isLoading, isFetching]);

  if (isError) {
    return (
      <div className="table-container">
        <ErrorCard className="w-full h-20" />
      </div>
    );
  }

  const getNetworkIcon = (network?: WalletCardsInnerNetworkEnum) => {
    switch (network) {
      case 'Visa':
        return <VisaIcon />;
      case 'Mastercard':
        return <MastercardIcon />;
      default:
        return <AmericanExpressIcon />;
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="text-left">NAME</th>
            <th align="center">TYPE</th>
            <th align="center">CARD NUMBER</th>
            <th align="center">BANK</th>
            <th align="center">NETWORK</th>
            <th align="center">EXPIRE DATE</th>
            <th align="center">DEFAULT</th>
          </tr>
        </thead>
        <tbody>
          {financialWalletsLoading ? (
            <SkeletonTable colSpan={7} count={2} skeletonClassName="h-[21px]" />
          ) : (
            data?.cards?.map((card, i) => (
              <Fragment key={card.id}>
                <tr className="table-seperator">
                  <td>
                    <div className="table-cell-content">{card.name}</div>
                  </td>
                  <td align="center">
                    <div className="table-cell-content capitalize">{card.type}</div>
                  </td>
                  <td align="center">
                    <div className="table-cell-content">{card.cardNumber}</div>
                  </td>
                  <td align="center">
                    <div className="table-cell-content">{card.bank}</div>
                  </td>
                  <td align="center">
                    <div className="table-cell-content">{getNetworkIcon(card?.network)}</div>
                  </td>
                  <td align="center">
                    <div className="table-cell-content">{`${card.expiryMonth}/${card.expiryYear}`}</div>
                  </td>
                  <td align="center">
                    <div className="table-cell-content">{card.isDefault ? 'Yes' : 'No'}</div>
                  </td>
                </tr>
                {i !== data!.cards!.length! - 1 && <tr />}
              </Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
