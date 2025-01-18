import { LogoutBtn } from "@/components/logout-btn";
import { Navbar } from "@/components/navbar";
import {
  BellRing,
  LucideChartNoAxesCombined,
  LucideClipboardPen,
  LucideHome,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

export const homeLinks: {
  icon: React.ReactNode;
  title: string;
  link: string;
}[] = [
  {
    icon: <LucideHome />,
    title: "Home",
    link: "/home",
  },
  {
    icon: <LucideClipboardPen />,
    title: "Write",
    link: "/write",
  },
  {
    icon: <LucideChartNoAxesCombined />,
    title: "Trending",
    link: "/trending",
  },
  {
    icon: <FaHashtag />,
    title: "Hashtags",
    link: "/hashtags",
  },
  {
    icon: <BellRing />,
    title: "Notifications",
    link: "/notifications",
  },
  {
    icon: <User />,
    title: "Profile",
    link: "/profile",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="md:hidden sticky top-0 bg-white z-10">
        <Navbar />
      </div>
      <div className="flex flex-1 flex-col justify-between items-start w-full md:min-h-screen max-w-6xl mx-auto">
        <main className="flex-1 flex relative w-full">
          {/* Aside Section */}
          <aside className="hidden md:flex flex-col justify-between py-5 sticky top-0 w-48 h-dvh border-r px-5">
            <ul className="space-y-5">
              <li>
                <div className="flex items-center">
                  <Image
                    src={"/logo.svg"}
                    width={30}
                    height={30}
                    quality={100}
                    alt="Devdocs clipboard logo"
                    className="w-5 h-5"
                  />
                  <h1 className="text-xl font-bold">
                    <Link href={"/"}>Devdocs</Link>
                  </h1>
                </div>
              </li>
              {homeLinks.map((item) => (
                <li key={item.title}>
                  <Link href={item.link} className="flex items-center gap-2">
                    {item.icon} {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <LogoutBtn />
            </div>
          </aside>
          {/* Content Section */}
          <div className="flex-1 w-full p-5">{children}</div>
        </main>
      </div>
    </>
  );
}
