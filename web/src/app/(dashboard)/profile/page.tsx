import Image from "next/image";

import { Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProfiePic from "../../../../public/profile.jpg";
import { BlogCard } from "@/components/blog-card";

export default function UserProfile() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center mx-auto w-full gap-2">
        <div>
          <Image
            src={ProfiePic}
            alt="user profile pic"
            width={500}
            height={500}
            quality={100}
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <div className="md:pl-5 my-2">
          <h1 className="text-xl font-bold">Full name</h1>
          <p className="flex items-center gap-2 my-2 text-neutral-700">
            <Mail /> Email
          </p>
          <div className="flex gap-5 my-2">
            <p>0 Followers</p>
            <p>0 Following</p>
          </div>
        </div>
      </div>

      <div className="my-5">
        <Tabs defaultValue="published" className="">
          <TabsList className="w-full md:max-w-lg mb-5">
            <TabsTrigger value="published" className="w-full">
              Published
            </TabsTrigger>
            <TabsTrigger value="drafts" className="w-full">
              Drafts
            </TabsTrigger>
          </TabsList>
          <TabsContent value="published" className="grid lg:grid-cols-2 gap-5">
            <BlogCard page="profile" type="published" />
            <BlogCard page="profile" type="published" />
            <BlogCard page="profile" type="published" />
            <BlogCard page="profile" type="published" />
            <BlogCard page="profile" type="published" />
          </TabsContent>
          <TabsContent value="drafts" className="grid lg:grid-cols-2 gap-5">
            <BlogCard page="profile" type="drafts" />
            <BlogCard page="profile" type="drafts" />
            <BlogCard page="profile" type="drafts" />
            <BlogCard page="profile" type="drafts" />
            <BlogCard page="profile" type="drafts" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
