interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <section>
      <nav style={{ borderBottom: "1px solid black" }}>
        <strong>Dashboard Nav</strong>
      </nav>
      <div>{children}</div>
    </section>
  );
};

export default DashboardLayout;
