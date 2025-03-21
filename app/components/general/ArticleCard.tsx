import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";

interface IappProps {
  data: {
    id: string;
    title: string;
    content: string;
    image: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export async function ArticleCard({ data }: IappProps) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userId = user?.id;

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/articles/${data.id}`} className="block w-full h-full">
        <div className="relative h-96 w-full overflow-hidden">
          <Image
            src={data.image}
            alt="Image for blog"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {data.title}
          </h3>

          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {data.content}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={data.authorImage}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">
                {data.authorName}
              </p>
            </div>

            <time className="text-xs text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
              }).format(data.createdAt)}
            </time>
          </div>
          {data.authorId === userId && (
            <div className="flex items-center justify-between mt-1">
              <div className="absolute top-2 left-2 flex items-center space-x-2">
                <div className="relative size-4 overflow-hidden rounded-2xl text-yellow-400">
                  <Image
                    src="/img/icons/icon-edit.svg"
                    alt="edit-icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-yellow-400">Editer</p>
              </div>
              <div className="absolute top-2 right-2 flex items-center space-x-2">
                <div className="relative size-4 overflow-hidden rounded-2xl">
                  <Image
                    src="/img/icons/icon-delete.svg"
                    alt="edit-icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-red-700">Supprimer</p>
              </div>
            </div>
          )}
          {/* <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <div className="relative size-4 overflow-hidden rounded-2xl text-yellow-400">
                <Image
                  src="/img/icons/icon-edit.svg"
                  alt="edit-icon"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium text-yellow-400">Editer</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative size-4 overflow-hidden rounded-2xl">
                <Image
                  src="/img/icons/icon-delete.svg"
                  alt="edit-icon"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium text-red-700">Supprimer</p>
            </div>
          </div> */}
        </div>
      </Link>
    </div>
  );
}
