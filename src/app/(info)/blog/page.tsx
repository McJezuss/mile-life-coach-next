import { FeaturedPosts } from "@/sections/blog/featured";
import { FeaturedPostsSkeleton } from "@/sections/blog/featured/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Blog | Milé Klaasee - Life Coach & Trauma Facilitator",
    description:
      "Discover transformative growth with our Cape Town-based life coach and trauma facilitator. Specializing in personal development, healing, and mediation, we guide you towards overcoming challenges, healing from trauma, and achieving harmony. Embrace your journey to empowerment and peace.",
  };
};

export default function BlogPosts() {
  return (
    <div className="flex flex-col justify-center items-center max-w-6xl h-full m-auto pb-20">
      <Suspense fallback={<FeaturedPostsSkeleton />}>
        <FeaturedPosts />
      </Suspense>
    </div>
  );
}
