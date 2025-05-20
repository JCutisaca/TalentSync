const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-base-light text-gray-800 dark:bg-base-dark dark:text-gray-100 transition-colors">
      <main>{children}</main>
    </div>
  );
};

export default MarketingLayout;
