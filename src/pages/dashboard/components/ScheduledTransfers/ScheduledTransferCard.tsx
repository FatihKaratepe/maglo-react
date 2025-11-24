import type { ScheduledTransfersTransfersInner } from '@/apis';
import { CurrencyFormat } from '@/utils';
import dayjs from 'dayjs';
import { type FC } from 'react';

interface IScheduledTransferCardProps {
  data: ScheduledTransfersTransfersInner | undefined;
}

export const ScheduledTransferCard: FC<IScheduledTransferCardProps> = ({ data }) => {
  const symbolMap: Record<string, string> = {
    $: 'USD',
    '€': 'EUR',
    '₺': 'TRY',
    '£': 'GBP',
    '¥': 'JPY',
  };

  return (
    <div className="flex items-center justify-between scheduled-transfer-card">
      <div className="flex items-center gap-[15px]">
        <img src={data?.image} className="w-[33px] h-[33px] object-cover rounded-full" alt={data?.name} />
        <div className="flex flex-col gap-[7px]">
          <div className="text-base text-text-1 leading-[17px] font-semibold">{data?.name}</div>
          <div className="text-xs text-text-2 leading-[15px] font-medium">
            {dayjs(data?.date).format('MMMM DD, YYYY [@] HH:mm')}
          </div>
        </div>
      </div>
      <div className="text-black text-base leading-5 font-semibold">
        {CurrencyFormat(data?.amount ?? 0, symbolMap[data?.currency as string] ?? 'TRY', 2)}
      </div>
    </div>
  );
};
