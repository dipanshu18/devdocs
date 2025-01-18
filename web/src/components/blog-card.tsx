import Image from "next/image";

import { Bookmark } from "@/components/bookmark";
import { LikeBtn } from "@/components/like-btn";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

import PrismaImage from "../../public/prisma.png";

export function BlogCard() {
  return (
    <div className="space-y-2 shadow rounded-md">
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
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur adipisci laborum ullam pariatur quas molestiae labore
            necessitatibus animi.
          </h1>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex gap-4">
            <LikeBtn />
            <Button variant={"outline"}>
              <MessageSquare size={24} />
            </Button>
          </div>

          <Bookmark />
        </div>
      </div>
    </div>
  );
}
