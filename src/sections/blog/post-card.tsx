import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { paths } from "@/paths";
import { Post } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { format } from "date-fns";
import { Typography } from "@/components/ui/typography";

interface BlogCardProps {
  post: Post;
  imageSizes?: string;
  imagePriority?: boolean;
}

export const BlogCard: FC<BlogCardProps> = ({
  post,
  imageSizes,
  imagePriority,
}) => {
  return (
    <Link
      href={paths.blog.post(post.slug)}
      className="h-full"
    >
      <Card className="h-full transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl duration-500 w-full min-w-[500px] max-lg:min-w-[300px]">
        <CardContent className="max-lg:text-center pt-3">
          <div className="flex flex-row space-x-5 mb-3">
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              width={150}
              height={50}
              className="rounded-xl aspect-square object-cover"
              sizes={imageSizes}
              priority={imagePriority}
            />
            <div className="space-y-2">
              <Typography variant="h2">{post.title}</Typography>
              <Typography variant="muted">
                {format(new Date(post.createdAt), "eeee, PP")}
              </Typography>
            </div>
          </div>
          <Typography variant="small">{post.previewContent}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
