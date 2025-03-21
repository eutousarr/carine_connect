import { handleSubmission } from "@/app/actions";
import { Submitbutton } from "@/app/components/general/Submitbutton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function CreateBlogRoute() {
  const { getUser, getPermission } = getKindeServerSession();
    const user = await getUser();
    const canCreateArticle = await getPermission("create:article")
  
    if (!user) {
      return redirect("/api/auth/register");
    }
    if (!canCreateArticle?.isGranted) {
      return redirect("/dashboard");
    }
  
  return (
    <div>
      <Card className="max-w-lg mx-auto mt-8">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            action={handleSubmission}
          >
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input name="title" required type="text" placeholder="Title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea name="content" required placeholder="Content" />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input name="file" required type="file" placeholder="Image for url" />
            </div>

            <Submitbutton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
