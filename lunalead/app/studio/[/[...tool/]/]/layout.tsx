import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio | Lunalead",
  description: "Manage content for Lunalead Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full overflow-hidden bg-background">
      {children}
    </div>
  );
}
