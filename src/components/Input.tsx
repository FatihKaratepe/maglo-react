export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className }) => {
  return <input className={`maglo-input ${className && className}`} />;
};
