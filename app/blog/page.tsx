import type { Metadata } from "next";
import { BlogView } from "@/components/blog-view";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notas da aiion sobre atenção, IA e o trabalho que o sistema pode assumir.",
};

export default function BlogPage() {
  return <BlogView />;
}
