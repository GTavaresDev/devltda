"use client";

import { ReactNode } from "react";

import { UsersProvider } from "@/app/contexts/users-context";

export default function Providers({ children }: { children: ReactNode }) {
  return <UsersProvider>{children}</UsersProvider>;
}
