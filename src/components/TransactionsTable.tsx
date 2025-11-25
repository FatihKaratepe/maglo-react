import type { RecentTransactionsTransactionsInner } from '@/apis';
import { CurrencyFormat } from '@/utils';
import dayjs from 'dayjs';
import { Fragment, type FC } from 'react';
import { SkeletonTable } from './Skeleton';

interface ITransactionsTableProps {
  loading: boolean;
  loadingCount: number;
  data: RecentTransactionsTransactionsInner[] | undefined;
}
export const TransactionsTable: FC<ITransactionsTableProps> = ({ loading, data, loadingCount }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="text-left">NAME/BUSINESS</th>
            <th align="center">TYPE</th>
            <th align="center">AMOUNT</th>
            <th align="center">DATE</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <SkeletonTable colSpan={4} count={loadingCount} skeletonClassName="h-[46px]" />
          ) : (
            data?.map((transaction, i) => (
              <Fragment key={transaction.id}>
                <tr className="table-seperator">
                  <td>
                    <div className="inline-flex items-center gap-3.5">
                      <img src={transaction.image} alt={transaction.name} className="w-10 h-10 object-cover" />
                      <div className="flex flex-col gap-[5px]">
                        <span className="table-cell-content">{transaction.name}</span>
                        <span className="text-text-2 font-normal text-xs leading-[13px]">{transaction.business}</span>
                      </div>
                    </div>
                  </td>
                  <td align="center">
                    <div className="text-text-2 font-medium text-base leading-[15px]">{transaction.type}</div>
                  </td>
                  <td align="center">
                    <div className="table-cell-content">
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
