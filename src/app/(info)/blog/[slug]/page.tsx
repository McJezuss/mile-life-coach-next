import { getPostBySlug } from "@/api/blog";
import { paths } from "@/paths";
import { BlogPost } from "@/sections/blog/post";
import { BlogPostSkeleton } from "@/sections/blog/post/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params: { slug },
}: Props): Promise<Metadata> => {
  const { data } = await getPostBySlug(slug);

  if (!data) return { title: "Blog | Stöckel Tattoos" };

  return {
    title: `${data.title} | Stöckel Tattoos`,
    authors: [{ name: "Stöckel Tattoos" }, { name: "Bianca Stöckel" }],
    description: data.previewContent,
    keywords: [...data.tags, "tattoo blog south africa", "tattoo blog"],
    metadataBase: new URL(process.env.S3_ENDPOINT || ""),
    openGraph: {
      countryName: "South Africa",
      type: "article",
      authors: [
        "Stöckel Tattoos",
        "Bianca Stöckel",
        `${process.env.WEBSITE_URL}${paths.about}`,
      ],
      description: data.previewContent,
      images: [
        {
          url: data.coverImageUrl,
          width: 400,
          height: 400,
          alt: "Artistic black and grey blog post cover image",
        },
      ],
      publishedTime: data.createdAt,
      tags: [...data.tags, "tattoo blog south africa", "tattoo blog"],
      title: data.title,
      siteName: "Stöckel Tattoos",
      url: `${process.env.WEBSITE_URL}${paths.blog.post(slug)}`,
      locale: "en_ZA",
    },
    robots: "index, follow",
    applicationName: "Stöckel Tattoos",
  };
};

export default function PostPage({ params: { slug } }: Props) {
  return (
    <div className="flex flex-col pt-20 pb-20 max-w-6xl m-auto tracking-tight font-avenir">
      <Suspense fallback={<BlogPostSkeleton />}>
        <BlogPost slug={slug} />
      </Suspense>
    </div>
  );
}
