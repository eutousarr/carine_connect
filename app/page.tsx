import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/app/utils/db";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BlogPostCard } from "@/app/components/general/BlogpostCard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({

    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function HomeRoute() {
  const { getPermission } = getKindeServerSession();
  const canCreateArticle = await getPermission("create:article");

  const data = await getData();

  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <h2 className="text-xl font-medium">Les Articles</h2>
        {canCreateArticle?.isGranted && (
          <Link className={buttonVariants()} href="/dashboard/create">
            Create Post
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <BlogPostCard
            data={{
              ...item,
              title: item.title ?? "Untitled",
              content: item.content ?? "No content available",
              imageUrl: item.imageUrl ?? "/img/taureau.png",
              authorId: item.authorId ?? "Unknown",
              authorName: item.authorName ?? "Anonymous",
              authorImage: item.authorImage ?? "/default-author-image.jpg",
            }}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
