import { Sidebar } from "./components";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Sidebar/>
      
      <main>{children}</main>
    </div>
  );
};
