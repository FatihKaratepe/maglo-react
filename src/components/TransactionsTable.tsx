import type { RecentTransactionsTransactionsInner } from '@/apis';
import { CurrencyFormat } from '@/utils';
import dayjs from 'dayjs';
import { Fragment, type FC } from 'react';
import { SkeletonLine } from './Skeleton';

interface ITransactionsTableProps {
  loading: boolean;
  data: RecentTransactionsTransactionsInner[] | undefined;
}
export const TransactionsTable: FC<ITransactionsTableProps> = ({ loading, data }) => {
  return (
    <table className="w-full border-separate border-spacing-y-[17px] -my-[17px]">
      <thead className="text-xs text-text-2 font-semibold leading-[15px]">
        <tr>
          <th className="text-left">NAME/BUSINESS</th>
          <th align="center">TYPE</th>
          <th>AMOUNT</th>
          <th>DATE</th>
        </tr>
      </thead>
      <tbody>
        {loading
          ? [0, 1, 2].map((x) => (
              <Fragment key={String(x)}>
                <tr className="table-seperator">
                  <td>
                    <div className="inline-flex items-center gap-3.5">
                      <SkeletonLine className="w-10 h-10" />
                      <div className="flex flex-col gap-[5px]">
                        <SkeletonLine className="w-[15ch] h-[15px]" />
                        <SkeletonLine className="w-[13ch] h-[13px]" />
                      </div>
                    </div>
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
          : data?.map((transaction, i) => (
              <Fragment key={transaction.id}>
                <tr className="table-seperator">
                  <td>
                    <div className="inline-flex items-center gap-3.5">
                      <img src={transaction.image} alt={transaction.name} className="w-10 h-10 object-cover" />
                      <div className="flex flex-col gap-[5px]">
                        <span className="text-text-1 font-medium text-base leading-[15px]">{transaction.name}</span>
                        <span className="text-text-2 font-normal text-xs leading-[13px]">{transaction.business}</span>
                      </div>
                    </div>
                  </td>
                  <td align="center">
                    <div className="text-text-2 font-medium text-base leading-[15px]">{transaction.type}</div>
                  </td>
                  <td align="center">
                    <div className="text-text-1 font-medium text-base leading-[15px]">
                      {CurrencyFormat(transaction.amount!, transaction.currency!)}
                    </div>
                  </td>
                  <td align="center">
                    <div className="text-text-2 font-medium text-base leading-[15px]">
                      {dayjs(transaction.date).format('DD MMM YYYY')}
                    </div>
                  </td>
                </tr>
                {i !== data!.length! - 1 && <tr />}
              </Fragment>
            ))}
      </tbody>
    </table>
  );
};
