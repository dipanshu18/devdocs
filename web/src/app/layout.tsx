import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Devdocs",
    template: "%s | Devdocs",
  },
  description:
    "A blogging platform for developers with real-time notifications and rich-text editor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main className="flex-1 w-full max-w-3xl mx-auto min-h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
