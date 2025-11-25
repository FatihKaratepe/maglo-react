import { cn } from '@/utils';
import type { FC } from 'react';
import { ExclamationIcon } from './Icons';

interface IErrorCardProps {
  iconClassName?: string;
  className?: string;
}

export const ErrorCard: FC<IErrorCardProps> = ({ className, iconClassName = 'h-4 w-4' }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-gray-6 border border-gray-5 rounded-[10px] overflow-hidden px-0.5 gap-1',
        className
      )}
    >
      <ExclamationIcon className={cn('text-red-400', iconClassName)} />
      <span className="text-xs font-semibold">Error</span>
    </div>
  );
};
