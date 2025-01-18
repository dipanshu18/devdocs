import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Bell, FileText, UsersRound } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const features: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}[] = [
  {
    icon: <FileText />,
    title: "Rich Text Editor",
    desc: "Markdown support with syntax highlighting and live preview.",
  },
  {
    icon: <Bell />,
    title: "Real-time Notifications",
    desc: "Stay updated with instant notifications for comments and interactions.",
  },
  {
    icon: <UsersRound />,
    title: "Community Features",
    desc: "Connect with other developers, share knowledge, and collaborate.",
  },
];

const working: {
  title: string;
  desc: string;
}[] = [
  {
    title: "Get started by creating an account",
    desc: "We support creating account using various methods like email-password, google-oauth and github-oauth to give freedom to signup with the preferred choice of signup",
  },
  {
    title: "Write blogs",
    desc: "Write about your learnings, experience about hackathons or using some tools, frameworks guides and so on. We make use of tip-tap rich text editor which supports various features with image upload for diagrams or reference pictures for making your blogs more appealing for understanding",
  },
  {
    title: "Engage with other developers in the comments",
    desc: "Appreciating other fellows and having suggestions, feedback or any back and forth communication through comments increase engagement and have healthy connections and great way of learning",
  },
  {
    title: "Follow the fellow developer and get notified",
    desc: "If you enjoy the way a developer writes or explains something through the blog, you can give a follow to them to get notifications for their newly published blogs so you don't miss out on anything",
  },
  {
    title: "Maintain a healthy community",
    desc: "Following the above steps make a great community with healthy discussions with new way of learning, sharing and expand your knowledge base",
  },
];

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center p-5 md:p-0">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl font-extrabold leading-tight mt-10">
              Write, Share, <span className="text-emerald-500">Connect</span>{" "}
              with Fellow Developers
            </h1>
            <p className="text-base text-neutral-600">
              A modern blogging platform built specifically for developers,
              featuring real-time notifications and a powerful rich-text editor.
            </p>
            <div>
              <Link href={"/signup"}>
                <Button className="py-3 px-8 h-full bg-emerald-500 hover:bg-emerald-600">
                  Try creating one
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={"/hero.svg"}
              width={1080}
              height={1920}
              quality={100}
              className="w-full h-full"
              alt="Laptop with page and pen for writing something"
            />
          </div>
        </div>

        <section
          id="features"
          className="my-10 flex flex-col justify-center items-center p-5 md:p-0"
        >
          <h1 className="text-2xl font-semibold">Features for Developers</h1>
          <p className="text-base mt-2 text-center text-neutral-600">
            Everything you need to create and manage your technical content
          </p>

          <div className="my-5 grid sm:grid-cols-2 gap-5">
            {features.map((item) => (
              <div
                key={item.title}
                className="space-y-2 shadow hover:shadow-lg transition-shadow duration-300 rounded-md p-5"
              >
                <div className="bg-black text-white w-fit p-2 rounded-md">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h1 className="text-xl font-medium">{item.title}</h1>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="working" className="my-10 text-center p-5 md:p-0">
          <h1 className="text-2xl font-semibold">How it works</h1>
          <p className="text-base mt-2 text-neutral-600">
            Everything you need to create and manage your technical content
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
            {working.map((item, idx) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={idx}
                className="p-5 shadow hover:shadow-lg transition-shadow duration-300 rounded-md"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex justify-center items-center font-extrabold">
                    {idx + 1}
                  </div>
                  <h1 className="text-left text-xl font-medium">
                    {item.title}
                  </h1>
                  <p className="text-left text-sm text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center my-10 p-5 md:p-0">
          <h1 className="text-2xl font-semibold">What are you waiting for?</h1>
          <p className="text-base mt-2 text-neutral-700">
            Create an account and get started on your writing journey
          </p>

          <div className="my-5 w-full max-w-md mx-auto">
            <Link href={"/signup"}>
              <Button className="w-full h-full py-3 bg-emerald-500 hover:bg-emerald-600">
                Get started
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
