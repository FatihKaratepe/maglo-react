import type { FC, SVGProps } from 'react';

export const ExpandIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_10864_124)">
        <path d="M12.4425 6.4425L9 9.8775L5.5575 6.4425L4.5 7.5L9 12L13.5 7.5L12.4425 6.4425Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_10864_124">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
