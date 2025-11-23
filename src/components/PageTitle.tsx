import { useEffect, type FC } from 'react';
import { useLocation } from 'react-router-dom';

interface IPageTitleProps {
  title: string;
}

export const PageTitle: FC<IPageTitleProps> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
};
