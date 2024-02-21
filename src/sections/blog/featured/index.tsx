import { getPosts } from "@/api/blog";
import { Button } from "@/components/ui/button";
import { paths } from "@/paths";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FeaturedPost } from "./featured-post";
import { BlogCard } from "../post-card";

export const FeaturedPosts = async () => {
  const { data } = await getPosts({
    page: 1,
    limit: 3,
  });

  return (
    <div className="flex flex-col justify-center items-center max-w-6xl h-full m-auto pb-20">
      <FeaturedPost post={data[0]} />
      <div className="flex flex-row justify-between w-full items-center mt-20 mb-5">
        <span className="font-bebas text-4xl">More Posts</span>
        <Button
          asChild
          variant={"ghost"}
          className="text-xl font-avenir font-bold"
        >
          <Link href={paths.blog.list()}>
            See All Posts <ChevronRight className="w-5 h-5 self-center" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 w-full">
        {data.slice(1).map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            imageSizes="(max-width: 768px) 30vw, (max-width: 1024px) 20vw"
          />
        ))}
      </div>
    </div>
  );
};
