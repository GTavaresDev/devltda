"use client";

import InputForm from "./components/InputForm";
import { useRouter } from "next/navigation";

import { useUsers } from "@/app/contexts/users-context";
import { User } from "@/app/types/users-type";

export default function CreateUserPage() {
  const router = useRouter();
  const { addUser } = useUsers();

  function handleAddUser(newUser: User) {
    addUser(newUser);
    router.push("/usuarios");
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <InputForm onAddUser={handleAddUser} />
    </div>
  );
}
