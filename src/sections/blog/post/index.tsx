import { getPostBySlug } from "@/api/blog";
import { Crumbs } from "@/components/ui/crumbs";
import { Typography } from "@/components/ui/typography";
import { markdownToHtml } from "@/lib/blog-utils";
import { paths } from "@/paths";
import { format } from "date-fns";
import Image from "next/image";
import { redirect } from "next/navigation";
import { WithContext, Blog } from "schema-dts";

export const BlogPost = async ({ slug }: { slug: string }) => {
  const { data } = await getPostBySlug(slug);

  if (!data) {
    redirect(paths.blog[404](slug));
  }

  // Schema org
  const jsonLd: WithContext<Blog> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: {
      "@type": "PronounceableText",
      textValue: data.title,
      inLanguage: {
        "@type": "Language",
        name: "English",
      },
    },
    url: process.env.WEBSITE_URL,
    image: data.coverImageUrl,
    description: data.previewContent,
    author: {
      "@type": "Person",
      name: "Bianca Stöckel",
    },
    dateModified: new Date().toLocaleString(),
    datePublished: data.createdAt,
    publisher: {
      "@type": "TattooParlor",
      name: "Stöckel Tattoos",
      url: process.env.WEBSITE_URL,
      logo: {
        "@type": "ImageObject",
        url:
          process.env.WEBSITE_URL + "/public/logos/logo-horizontal-full.webp",
      },
    },
  };

  // html
  const html = await markdownToHtml(data.content);

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Crumbs
        crumbs={[
          { name: "Blog", href: paths.blog.index },
          { name: "All Posts", href: paths.blog.list() },
          { name: data.title, href: paths.blog.post(slug) },
        ]}
      />
      <div className="flex flex-row max-lg:flex-col items-center max-lg:items-start space-x-10 max-lg:space-x-0 max-lg:space-y-10">
        <Image
          priority
          src={data.coverImageUrl}
          alt={data.title}
          width={200}
          height={200}
          className="rounded-xl aspect-square object-cover"
          sizes="(max-width: 768px) 40vw, (max-width: 1024px) 20vw, 10vw"
        />
        <div className="flex flex-col space-y-2">
          <Typography variant="h1">{data.title}</Typography>
          <Typography variant="muted">
            {format(new Date(data.createdAt), "eeee PP")}
          </Typography>
        </div>
      </div>
      <article
        className="min-w-full space-y-4 pt-20 font-fraunces prose [&>*]:w-full"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};
