import Image from "next/image";

import { Bookmark } from "@/components/bookmark";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

import PrismaImage from "../../public/prisma.png";
import Link from "next/link";
import { Delete, Edit, Publish, Unpublish } from "./user-blog-action-btn";

export function BlogCard({
  page,
  type,
}: {
  page: "home" | "profile" | "other-profile";
  type: "published" | "drafts";
}) {
  return (
    <div className="space-y-2 rounded-md shadow hover:shadow-xl transition-shadow duration-300">
      <div>
        <Image
          src={PrismaImage}
          alt="primsa thumbnail"
          width={500}
          height={500}
          quality={100}
          className="w-full h-56 object-center rounded-t-md"
        />
      </div>
      <div className="p-5 space-y-5">
        <div>
          <Link
            href={
              page === "home"
                ? "/home/:id"
                : page === "other-profile"
                ? "/home/:id"
                : type === "published"
                ? "/profile/blogs/:id"
                : "/profile/drafts/:id"
            }
          >
            <h1 className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur adipisci laborum ullam pariatur quas molestiae labore
              necessitatibus animi.
            </h1>
          </Link>
        </div>
        <div className="flex w-full justify-between">
          <Button variant={"outline"}>
            <MessageSquare size={24} />
          </Button>

          <Bookmark />
        </div>

        {page === "profile" && (
          <div className="flex items-center gap-2">
            {type === "published" ? <Unpublish /> : <Publish />}
            {type === "drafts" && <Edit />}
            <Delete />
          </div>
        )}
      </div>
    </div>
  );
}
