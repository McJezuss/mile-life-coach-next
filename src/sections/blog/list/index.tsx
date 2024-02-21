import { getPosts } from "@/api/blog";
import { BlogCard } from "../post-card";
import { BlogListPagination } from "./list-pagination";

export const BlogList = async ({ currentPage }: { currentPage: number }) => {
  const { data, numberOfPages } = await getPosts({
    page: currentPage,
  });

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
        {data.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            imageSizes="(max-width: 768px) 30vw, (max-width: 1024px) 20vw"
            imagePriority
          />
        ))}
      </div>
      <BlogListPagination
        page={currentPage}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};
