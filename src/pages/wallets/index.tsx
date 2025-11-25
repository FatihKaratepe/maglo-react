import { SkeletonLine } from '@/components';
import { AmericanExpressIcon, MastercardIcon, VisaIcon } from '@/components/Icons';
import { Fragment, useMemo } from 'react';
import { useFinancialWallets } from './api';

export default function Wallets() {
  const { data, isLoading, isFetching } = useFinancialWallets();
  const financialWalletsLoading = useMemo(() => isLoading || isFetching, [isLoading, isFetching]);

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
          {financialWalletsLoading
            ? [0, 1, 2].map((x) => (
                <Fragment key={String(x)}>
                  <tr className="table-seperator">
                    <td>
                      <SkeletonLine className="w-[13ch] h-[13px]" />
                    </td>
                    <td align="center">
                      <SkeletonLine className="w-[15ch] h-[15px]" />
                    </td>
                    <td align="center">
                      <SkeletonLine className="w-[9ch] h-[15px]" />
                    </td>
                    <td align="center">
                      <SkeletonLine className="w-[13ch] h-[15px]" />
                    </td>
                  </tr>
                  {x !== 2 && <tr />}
                </Fragment>
              ))
            : data?.cards?.map((card, i) => (
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
                      <div className="table-cell-content">
                        {card.network === 'Visa' ? (
                          <VisaIcon />
                        ) : card.network === 'Mastercard' ? (
                          <MastercardIcon />
                        ) : (
                          <AmericanExpressIcon />
                        )}
                      </div>
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
              ))}
        </tbody>
      </table>
    </div>
  );
}
