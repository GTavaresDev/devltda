"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import initialUsers from "@/app/data/users";
import { User } from "@/app/types/users-type";

type UsersContextValue = {
  users: User[];
  addUser: (user: User) => void;
};

const UsersContext = createContext<UsersContextValue | null>(null);

export function UsersProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>(initialUsers);

  function addUser(user: User) {
    setUsers((currentUsers) => [...currentUsers, user]);
  }

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }

  return context;
}
