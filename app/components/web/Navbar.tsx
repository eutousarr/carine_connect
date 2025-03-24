"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Blog",
    reference: "blog",
    path: "/blog",
  },
  {
    label: "Students",
    reference: "students",
    path: "/students",
  },
  {
    label: "Dashboard",
    reference: "dashboard",
    path: "/dashboard",
  },
  {
    label: "Contacts",
    reference: "contact",
    path: "/contacts",
  },
];

export function Navbar() {
  const { getUser, isLoading } = useKindeBrowserClient();
  const user = getUser();

  const pathname = usePathname();
  const pathStrSplit = pathname.split("/");
  // const fileName = pathStrSplit[pathStrSplit.length - 1]
  const directoryName = pathStrSplit.slice(0, -1).join("/");

  console.log(directoryName);

  return (
    <nav className="py-4 flex items-center justify-between border-b-2">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Kisarr<span className="text-blue-500">Web</span>
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          {routes.map((route) => (
            <Link key={route.path} href={route.path}>
              <Button
                className={` ${
                  route.path === pathname
                    ? "bg-red-600"
                    : "bg-gray-700 hover:bg-red-200 hover:text-gray-800"
                }`}
              >
                {route.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      { isLoading ? (
        <>
        <div className="flex items-center spqce-x-2">
          <div>En charge...</div>
          <Link href='/dashboard'>Get Started</Link>
        </div>
        </>
      ) : user ? (
        <div className="flex items-center gap-4">
          <p>{user.name} {user.email}</p>
          <Link
            href="/articles"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Articles
          </Link>
          <LogoutLink className={buttonVariants({ variant: "secondary" })}>
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants()}>Login</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign up
          </RegisterLink>
        </div>
      )}
    </nav>
  );
}
