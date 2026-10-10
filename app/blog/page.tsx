import type { Metadata } from "next";
import { BlogView } from "@/components/blog-view";

export const metadata: Metadata = {
  title: "Blog",
  description: "IA, automação e tecnologia aplicada, sem hype. Arquivo do blog da aiion.",
};

export default function BlogPage() {
  return <BlogView />;
}
