"use client";

import React from "react";

import { authClient } from "@/app/lib/auth-client";

const Page = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
        <p className="text-zinc-500">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-center space-y-4">
          <p className="text-zinc-500">Not authenticated</p>
          <a
            href="/sign-in"
            className="inline-block rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Sign in
          </a>
        </div>
      </div>
    );
  }

  return <div>empty yet</div>;
};

export default Page;
