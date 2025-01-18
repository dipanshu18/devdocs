import Image from "next/image";

import PrismaPic from "../../public/prisma.png";

export function TrendingBlogCard() {
  return (
    <div className="flex flex-col sm:flex-row shadow hover:shadow-lg transition-shadow duration-300 rounded-md">
      <Image
        src={PrismaPic}
        alt="Blog thumbnail"
        width={1080}
        height={1920}
        quality={100}
        className="sm:w-1/2 rounded-t-md sm:rounded-l-md w-full h-full object-cover"
      />
      <div className="p-5">
        <h1 className="text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          necessitatibus consequuntur tempore saepe eius asperiores quia alias
          aperiam aliquid hic.
        </h1>
      </div>
    </div>
  );
}
