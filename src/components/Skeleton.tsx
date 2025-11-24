import type { FC } from 'react';

interface ISkeletonLineProps {
  className?: string;
}
interface ISkeletonProps {
  className?: string;
}

export const SkeletonLine: FC<ISkeletonLineProps> = ({ className }) => {
  return <div className={`shimmer bg-gray-6 rounded-[10px] ${className}`} />;
};

export const Skeleton: FC<ISkeletonProps> = ({ className }) => {
  return (
    <div role="status" className={className}>
      <SkeletonLine className="h-2.5 w-48 mb-4" />
      <SkeletonLine className="shimmer h-2 max-w-[360px] mb-2.5" />
      <SkeletonLine className="shimmer h-2 mb-2.5" />
      <SkeletonLine className="shimmer h-2 max-w-[330px] mb-2.5" />
      <SkeletonLine className="shimmer h-2 max-w-[300px] mb-2.5" />
      <SkeletonLine className="shimmer h-2 max-w-[360px]" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
