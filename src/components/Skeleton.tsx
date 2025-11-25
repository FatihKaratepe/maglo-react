import { cn } from '@/utils';
import { Fragment, type FC } from 'react';

interface ISkeletonLineProps {
  className?: string;
}

const SkeletonLine: FC<ISkeletonLineProps> = ({ className }) => {
  return <div className={cn('shimmer bg-gray-6 rounded-[10px]', className)} />;
};

interface ISkeletonTableProps {
  count: number;
  colSpan: number;
  skeletonClassName: string;
}

const SkeletonTable: FC<ISkeletonTableProps> = ({ count, colSpan, skeletonClassName }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Fragment key={String(i)}>
          <tr className="table-seperator">
            <td colSpan={colSpan}>
              <SkeletonLine className={cn('w-full', skeletonClassName)} />
            </td>
          </tr>
          {i !== count - 1 && <tr />}
        </Fragment>
      ))}
    </>
  );
};

interface ISkeletonListProps {
  count: number;
  skeletonClassName: string;
  className?: string;
}

const SkeletonList: FC<ISkeletonListProps> = ({ count, skeletonClassName, className }) => {
  return Array.from({ length: count }).map((_, i) => (
    <div className={className}>
      <SkeletonLine key={String(i)} className={cn('w-full', skeletonClassName)} />
    </div>
  ));
};

export { SkeletonLine, SkeletonList, SkeletonTable };
