import { BlogCard } from "@/components/blog-card";

export default function Dashboard() {
  return (
    <div className="w-full">
      <h1 className="text-xl font-bold mb-5">Explore</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <BlogCard page="home" type="published" />
        <BlogCard page="home" type="published" />
        <BlogCard page="home" type="published" />
        <BlogCard page="home" type="published" />
        <BlogCard page="home" type="published" />
        <BlogCard page="home" type="published" />
      </div>
    </div>
  );
}
