import { SkeletonLine } from '@/components';
import { ExpandIcon } from '@/components/Icons';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useFinancialTransfersScheduled } from '../../api';
import { ScheduledTransferCard } from './ScheduledTransferCard';

export const ScheduledTransfers = () => {
  const { data, isLoading, isFetching } = useFinancialTransfersScheduled();
  const financialTransfersScheduledLoading = useMemo(() => isLoading || isFetching, [isLoading, isFetching]);

  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex justify-between items-center">
        <div className="title-3">Scheduled Transfers</div>
        <NavLink
          to={'/invoices'}
          className="flex items-center gap-1.5 text-secondary text-base leading-[15px] font-semibold"
        >
          View All
          <ExpandIcon className="-rotate-90" />
        </NavLink>
      </div>
      <div className="flex flex-col gap-3">
        {financialTransfersScheduledLoading
          ? [0, 1, 2, 3, 4].map((x) => (
              <div key={String(x)} className="flex items-center justify-between scheduled-transfer-card">
                <div className="flex items-center gap-[15px]">
                  <SkeletonLine className="w-[33px] h-[33px] rounded-full" />
                  <div className="flex flex-col gap-[7px]">
                    <SkeletonLine className="w-[12ch] h-[17px]" />
                    <SkeletonLine className="w-[17ch] h-[15px]" />
                  </div>
                </div>
                <SkeletonLine className="w-[9ch] h-5" />
              </div>
            ))
          : data?.transfers?.map((x) => <ScheduledTransferCard data={x} />)}
      </div>
    </div>
  );
};
