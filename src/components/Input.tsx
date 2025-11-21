export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...restProps }) => {
  return <input className={`maglo-input ${className && className}`} {...restProps} />;
};
