import { Navbar } from "@/components/navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 h-full">{children}</main>
    </div>
  );
}
