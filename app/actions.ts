"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/app/utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getImageUrl} from "@/lib/image"
import { NextResponse } from "next/server";

export async function handleSubmission(formData: FormData ) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }
  const title = formData.get("title");
  const content = formData.get("content");
  const file = formData.get("file");

  let fileUrl = null;
  if (file instanceof File) {
    fileUrl = await getImageUrl(file);
  }
  const fullname = user.given_name + " " + user.family_name
  await prisma.blogPost.create({
    data: {
      id: crypto.randomUUID(), // Generate a unique ID
      title: title as string,
      content: content as string,
      imageUrl: fileUrl as string,
      authorId: user.id,
      authorImage: user.picture as string,
      authorName: fullname as string,
      updatedAt: new Date(), // Set the current date and time
    },
  });

  revalidatePath("/");
  redirect("/dashboard")
  return NextResponse.json({"message": "Created successfully"});
}

export async function articleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }

  const title = formData.get("title");
  const content = formData.get("content");
  const fileUrl = formData.get("fileUrl");

  await prisma.article.create({
    data: {
      id: crypto.randomUUID(), // Generate a unique ID
      title: title as string,
      content: content as string,
      image: fileUrl as string,
      authorId: user.id,
      authorImage: user.picture as string,
      authorName: user.given_name as string,
      updatedAt: new Date(), // Set the current date and time
    },
  });

  revalidatePath("/articles");
  return redirect("/articles");
}

export async function articleUpdate(params: { id: string }, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }

  const title = formData.get("title");
  const content = formData.get("content");
  const fileUrl = formData.get("fileUrl");

  await prisma.article.update({
    where: { id: params.id},
    data: {
      title: title as string,
      content: content as string,
      image: fileUrl as string,
      authorId: user.id,
      authorImage: user.picture as string,
      authorName: user.given_name as string,
    },
  });

  revalidatePath("/articles");
  return redirect("/articles");
}

