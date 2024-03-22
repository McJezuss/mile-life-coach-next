import { Crumbs } from "@/components/ui/crumbs";
import { paths } from "@/paths";
import { BlogList } from "@/sections/blog/list";
import { BlogListSkeleton } from "@/sections/blog/list/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Blog Posts | Milé Klaasee - Life Coach & Trauma Facilitator",
    description:
      "Discover transformative growth with our Cape Town-based life coach and trauma facilitator. Specializing in personal development, healing, and mediation, we guide you towards overcoming challenges, healing from trauma, and achieving harmony. Embrace your journey to empowerment and peace.",
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
