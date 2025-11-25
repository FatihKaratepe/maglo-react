import { cn } from '@/utils';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import { useEffect, useRef, useState } from 'react';

interface IEllipsisTooltipProps {
  text: string;
  className?: string;
}

export const EllipsisTooltip: React.FC<IEllipsisTooltipProps> = ({ text, className }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(false);

  useEffect(() => {
    const handleOverflow = () => {
      const el = textRef.current;
      if (el) {
        setIsOverflowed(el.scrollWidth > el.clientWidth);
      }
    };
    handleOverflow();
    window.addEventListener('resize', handleOverflow);

    return () => window.removeEventListener('resize', handleOverflow);
  }, []);

  return isOverflowed ? (
    <Tooltip
      overlay={<div>{text}</div>}
      trigger={'hover'}
      motion={{ motionName: 'rc-tooltip-zoom' }}
      placement="bottom"
      showArrow
      align={{ offset: [0, 25] }}
    >
      <div ref={textRef} className={cn('truncate', className)}>
        {text}
      </div>
    </Tooltip>
  ) : (
    <div ref={textRef} className={className}>
      {text}
    </div>
  );
};
