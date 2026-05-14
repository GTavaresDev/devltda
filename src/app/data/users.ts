import { cache } from "react";

import { db } from "@/db";
import type { User } from "@/app/types/users-type";

function mapUser(user: {
  id: number;
  name: string;
  cargo: string;
  salary: number;
}): User {
  return {
    id: user.id,
    name: user.name,
    cargo: user.cargo,
    salary: user.salary,
  };
}

export const getUsers = cache(async (): Promise<User[]> => {
  const users = await db.usuario.findMany({
    orderBy: { createdAt: "desc" },
  });

  return users.map(mapUser);
});

export async function getUserById(id: number): Promise<User | null> {
  const user = await db.usuario.findUnique({
    where: { id },
  });

  return user ? mapUser(user) : null;
}
