import { cn } from '@/utils';
import type { FC } from 'react';
import { SpinnerIcon } from './Icons';

interface ILoadingProps {
  className?: string;
}

export const Loading: FC<ILoadingProps> = ({ className = 'w-screen h-screen' }) => {
  return (
    <div className={cn('flex flex-col justify-center items-center', className)}>
      <div className="flex justify-center items-center ">
        <SpinnerIcon className="w-10 h-10" />
      </div>

      <span className="inline-block mt-1 font-medium text-center text-sm">Loading...</span>
    </div>
  );
};
