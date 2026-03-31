"use client";

import Image from "next/image";

import { authClient } from "@/app/lib/auth-client";

export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.href = "/sign-in";
  };

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

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-sm space-y-6 p-8 text-center">
        {session.user.image && (
          <Image
            width={64}
            height={64}
            src={session.user.image}
            alt="Avatar"
            className="mx-auto h-16 w-16 rounded-full"
          />
        )}
        <div>
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {session.user.name || "Welcome"}
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {session.user.email}
          </p>
        </div>
        <button
          onClick={handleSignOut}
          className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
