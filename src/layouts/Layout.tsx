interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <aside></aside>
      <main>{children}</main>
    </div>
  );
};
