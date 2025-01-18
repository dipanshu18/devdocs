import { TrendingBlogCard } from "@/components/trending-blog-card";

export default function Trending() {
  return (
    <div>
      <h1 className="mb-5 text-xl font-bold">Trending</h1>

      <div className="grid grid-cols-1 gap-5">
        <TrendingBlogCard />
        <TrendingBlogCard />
        <TrendingBlogCard />
        <TrendingBlogCard />
        <TrendingBlogCard />
      </div>
    </div>
  );
}
