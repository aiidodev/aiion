import { projects } from "@/lib/portfolio";

export async function GET(request: Request) {
  const target = new URL(request.url).searchParams.get("url") || "";
  const known = projects.some((project) => project.href === target);
  if (!known) return new Response(null, { status: 404 });

  const upstream = await fetch(`https://image.thum.io/get/width/720/${target}`, {
    headers: { "user-agent": "aiion-portfolio" },
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!upstream.ok || !upstream.body) return new Response(null, { status: 502 });

  return new Response(upstream.body, {
    headers: {
      "content-type": upstream.headers.get("content-type") || "image/png",
      "cache-control": "public, max-age=86400",
    },
  });
}
