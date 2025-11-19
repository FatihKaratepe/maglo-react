import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface IPageTitleProps {
  title: string;
}

export const PageTitle: React.FC<IPageTitleProps> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
};

