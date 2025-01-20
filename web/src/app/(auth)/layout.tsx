import { Navbar } from "@/components/navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between min-h-dvh">
      <Navbar />
      <main className="flex-1 h-full flex justify-center items-center">
        {children}
      </main>
    </div>
  );
}
