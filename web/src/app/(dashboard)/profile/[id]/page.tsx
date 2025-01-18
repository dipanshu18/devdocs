import Image from "next/image";

import { Mail } from "lucide-react";

import ProfiePic from "../../../../../public/profile.jpg";
import { BlogCard } from "@/components/blog-card";

export default function OtherUserProfile() {
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

      <div className="my-5 grid lg:grid-cols-2 gap-5">
        <BlogCard page="other-profile" type="published" />
        <BlogCard page="other-profile" type="published" />
        <BlogCard page="other-profile" type="published" />
        <BlogCard page="other-profile" type="published" />
        <BlogCard page="other-profile" type="published" />
      </div>
    </div>
  );
}
