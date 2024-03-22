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

  if (!data)
    return { title: "Blog | Milé Klaasee - Life Coach & Trauma Facilitator" };

  return {
    title: `${data.title} | Milé Klaasee - Life Coach & Trauma Facilitator`,
    authors: [
      { name: "Milé Klaasee - Life Coach & Trauma Facilitator" },
      { name: "Milé Klaasee" },
    ],
    description: data.previewContent,
    keywords: [
      ...data.tags,
      "life coach south africa",
      "life coach blog",
      "life coach",
    ],
    metadataBase: new URL(process.env.S3_ENDPOINT || ""),
    openGraph: {
      countryName: "South Africa",
      type: "article",
      authors: [
        "Milé Klaasee - Life Coach & Trauma Facilitator",
        "Milé Klaasee",
        `${process.env.WEBSITE_URL}${paths.about}`,
      ],
      description: data.previewContent,
      images: [
        {
          url: data.coverImageUrl,
          width: 400,
          height: 400,
          alt: "Feel good image",
        },
      ],
      publishedTime: data.createdAt,
      tags: [
        ...data.tags,
        "life coach south africa",
        "life coach blog",
        "life coach",
      ],
      title: data.title,
      siteName: "Milé Klaasee - Life Coach & Trauma Facilitator",
      url: `${process.env.WEBSITE_URL}${paths.blog.post(slug)}`,
      locale: "en_ZA",
    },
    robots: "index, follow",
    applicationName: "Milé Klaasee - Life Coach & Trauma Facilitator",
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
