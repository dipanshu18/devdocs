import Link from "next/link";

import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cookies } from "next/headers";
import { LogoutBtn } from "./logout-btn";

const landingLinks: {
  title: string;
  link: string;
}[] = [
  {
    title: "Features",
    link: "#features",
  },
  {
    title: "Working",
    link: "#working",
  },
];

const authLinks: {
  title: string;
  link: string;
}[] = [
  {
    title: "Trending",
    link: "",
  },

  {
    title: "Hashtags",
    link: "",
  },
  {
    title: "Notifications",
    link: "",
  },
  {
    title: "Profile",
    link: "",
  },
];

export async function Navbar() {
  const session = (await cookies()).get("session");

  return (
    <nav className="sticky top-0 backdrop-blur-md border-b py-4 px-8 z-10">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu />
              </SheetTrigger>
              <SheetContent
                side={"left"}
                className="flex flex-col justify-between min-h-full text-left"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center text-2xl text-left">
                    <Image
                      src={"/logo.svg"}
                      width={30}
                      height={30}
                      quality={100}
                      alt="Devdocs clipboard logo"
                      className="w-5 h-5"
                    />
                    <Link href={"/"}>Devdocs</Link>
                  </SheetTitle>
                  <ul className="my-2 text-left">
                    {session
                      ? authLinks.map((item, idx) => (
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          <SheetClose asChild key={idx}>
                            <Link href={item.link}>
                              <li className="my-3 text-lg text-neutral-700">
                                {item.title}
                              </li>
                            </Link>
                          </SheetClose>
                        ))
                      : landingLinks.map((item, idx) => (
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          <SheetClose asChild key={idx}>
                            <Link href={item.link}>
                              <li className="my-3 text-lg text-neutral-700">
                                {item.title}
                              </li>
                            </Link>
                          </SheetClose>
                        ))}
                  </ul>
                </SheetHeader>
                <VisuallyHidden>
                  <SheetDescription>
                    <span />
                  </SheetDescription>
                </VisuallyHidden>
                <SheetFooter className="sm:flex-col sm:space-x-0">
                  {session ? (
                    <SheetClose asChild>
                      <LogoutBtn />
                    </SheetClose>
                  ) : (
                    <>
                      <SheetClose asChild>
                        <Link href={"/login"}>
                          <Button variant={"ghost"} className="w-full mt-2">
                            Login
                          </Button>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href={"/signup"}>
                          <Button className="w-full mt-2">Get started</Button>
                        </Link>
                      </SheetClose>
                    </>
                  )}
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
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
        </div>
        {!session && (
          <div className="hidden md:block">
            <ul className="flex items-center gap-5">
              {landingLinks.map((item) => (
                <Link key={item.title} href={item.link}>
                  <li>{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        )}
        <div className="hidden md:block space-x-5">
          {session ? (
            <LogoutBtn />
          ) : (
            <>
              <Link href={"/login"}>
                <Button variant={"ghost"}>Login</Button>
              </Link>
              <Link href={"/signup"}>
                <Button>Get started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
