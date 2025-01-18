import Image from "next/image";

import { Bookmark } from "@/components/bookmark";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

import PrismaImage from "../../public/prisma.png";
import Link from "next/link";

export function BlogCard() {
  return (
    <Link href={"/home/:id"}>
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
            <h1 className="text-lg font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur adipisci laborum ullam pariatur quas molestiae labore
              necessitatibus animi.
            </h1>
          </div>
          <div className="flex w-full justify-between">
            <Button variant={"outline"}>
              <MessageSquare size={24} />
            </Button>

            <Bookmark />
          </div>
        </div>
      </div>
    </Link>
  );
}
