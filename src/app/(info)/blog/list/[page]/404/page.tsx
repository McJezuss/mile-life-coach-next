import { paths } from "@/paths";
import { redirect } from "next/navigation";

export default function BlogPost404() {
  redirect(paths.blog.list());
}
