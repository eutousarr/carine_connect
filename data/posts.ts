import { prisma } from "@/app/utils/db";
import { BlogPost } from "@/types/blogPosts";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const { getUser } = getKindeServerSession();
const user = await getUser();

const posts: BlogPost[] = await prisma.blogPost.findMany({
  where: {
    authorId: user?.id,
  },
});

export default posts;
