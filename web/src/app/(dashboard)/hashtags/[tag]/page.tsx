import { BlogCard } from "@/components/blog-card";

export default function TagBlogs() {
  return (
    <>
      <h1 className="mb-5 text-xl font-bold">Tag Name Blogs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <BlogCard page="home" type="published" />
        <BlogCard page="home" type="published" />
        <BlogCard page="home" type="published" />
        <BlogCard page="home" type="published" />
      </div>
    </>
  );
}
