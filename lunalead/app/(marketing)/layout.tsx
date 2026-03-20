export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* Any marketing-specifc wrappers can go here */}
      {children}
    </div>
  );
}
