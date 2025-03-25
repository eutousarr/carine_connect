import { prisma } from "@/app/utils/db";
import {BlogPostCard} from "@/app/components/general/BlogpostCard"; // Ensure EleveNotes is a valid React component
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Params {
  params: Promise<{
    id: string;
  }>;
}
export async function getArticleById(id: string) {
  const article = await prisma.blogPost.findFirst({
    where: {
      id: id,
    }
  });

  if (!article) {
    throw new Error("Student not found");
  }
  return article;
}
export default async function SingleArticleRoute({ params }: Params) {
  const { id } = await params;
  const data = await getArticleById(id);
  return (
    <div>
      {data ? (
        <BlogPostCard data={data} />
      ) : (
        <div>Article not found</div>
      )}
    </div>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const article = await getArticleById(params.id as string);

  if (!article) {
    return notFound();
  }

  const title = `${(await article).title}`;

  return {
    title,
  };
}
