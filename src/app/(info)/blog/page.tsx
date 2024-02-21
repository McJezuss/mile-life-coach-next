import { FeaturedPosts } from "@/sections/blog/featured";
import { FeaturedPostsSkeleton } from "@/sections/blog/featured/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Blog | Stöckel Tattoos",
    description:
      "Dive into the heart of tattoo culture with our blog, a treasure trove of articles ranging from detailed aftercare instructions to preparing for your tattoo appointment, and even a touch of humor to lighten the mood. Each post is crafted to inform, inspire, and entertain, offering insights into all things tattoos. Whether you're a tattoo aficionado or a curious newbie, our blog is your go-to source for the latest tips, trends, and tales from the world of tattooing. Join us in exploring the art and soul of tattoos.",
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
