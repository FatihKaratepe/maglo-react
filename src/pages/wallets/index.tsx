import { SkeletonLine } from '@/components';
import { AmericanExpressIcon, MastercardIcon, VisaIcon } from '@/components/Icons';
import { Fragment, useMemo } from 'react';
import { useFinancialWallets } from './api';

export default function Wallets() {
  const { data, isLoading, isFetching } = useFinancialWallets();
  const financialWalletsLoading = useMemo(() => isLoading || isFetching, [isLoading, isFetching]);

  return (
    <table className="w-full border-separate border-spacing-y-[17px] -my-[17px]">
      <thead className="text-xs text-text-2 font-semibold leading-[15px]">
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
                    <div className="text-text-1 font-medium text-base leading-[15px]">{card.name}</div>
                  </td>
                  <td align="center">
                    <div className="text-text-1 font-medium text-base leading-[15px] capitalize">{card.type}</div>
                  </td>
                  <td align="center">
                    <div className="text-text-1 font-medium text-base leading-[15px]">{card.cardNumber}</div>
                  </td>
                  <td align="center">
                    <div className="text-text-1 font-medium text-base leading-[15px]">{card.bank}</div>
                  </td>
                  <td align="center">
                    <div className="text-text-1 font-medium text-base leading-[15px]">
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
                    <div className="text-text-1 font-medium text-base leading-[15px]">{`${card.expiryMonth}/${card.expiryYear}`}</div>
                  </td>
                  <td align="center">
                    <div className="text-text-1 font-medium text-base leading-[15px]">
                      {card.isDefault ? 'Yes' : 'No'}
                    </div>
                  </td>
                </tr>
                {i !== data!.cards!.length! - 1 && <tr />}
              </Fragment>
            ))}
      </tbody>
    </table>
  );
}
