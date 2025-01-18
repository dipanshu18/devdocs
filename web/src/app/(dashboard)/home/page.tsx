import { BlogCard } from "@/components/blog-card";

export default function Dashboard() {
  return (
    <div className="w-full">
      {/* <h1>Dashboard</h1> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
