import { Crumbs } from "@/components/ui/crumbs";
import { paths } from "@/paths";
import { BlogList } from "@/sections/blog/list";
import { BlogListSkeleton } from "@/sections/blog/list/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Blog Posts | Stöckel Tattoos",
    description:
      "Dive into the heart of tattoo culture with our blog, a treasure trove of articles ranging from detailed aftercare instructions to preparing for your tattoo appointment, and even a touch of humor to lighten the mood. Each post is crafted to inform, inspire, and entertain, offering insights into all things tattoos. Whether you're a tattoo aficionado or a curious newbie, our blog is your go-to source for the latest tips, trends, and tales from the world of tattooing. Join us in exploring the art and soul of tattoos.",
  };
};

export default function BlogPostsList({
  params: { page = 1 },
}: {
  params: { page: number };
}) {
  return (
    <div className="flex flex-col justify-center items-center max-w-6xl h-full m-auto pt-10 pb-10">
      <div className="w-full ">
        <Crumbs
          crumbs={[
            { name: "Blog", href: paths.blog.index },
            { name: "All Posts", href: paths.blog.list() },
          ]}
        />
      </div>

      <Suspense fallback={<BlogListSkeleton />}>
        <BlogList currentPage={page} />
      </Suspense>
    </div>
  );
}
