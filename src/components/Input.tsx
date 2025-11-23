import type { FC } from 'react';

export const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...restProps }) => {
  return <input className={`maglo-input ${className && className}`} {...restProps} />;
};
