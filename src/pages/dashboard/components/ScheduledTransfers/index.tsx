import { SkeletonList } from '@/components';
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
        {financialTransfersScheduledLoading ? (
          <SkeletonList count={5} skeletonClassName="h-[39px]" className="scheduled-transfer-card" />
        ) : (
          data?.transfers?.map((x) => <ScheduledTransferCard key={x.id} data={x} />)
        )}
      </div>
    </div>
  );
};
