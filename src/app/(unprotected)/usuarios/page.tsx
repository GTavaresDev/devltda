"use client";

import initialUsers from "@/app/data/users";
import Header from "./components/Header";
import UsersTable from "./components/UsersTable";
import InputForm from "./components/InputForm";
import { useState } from "react";
import { User } from "@/app/types/users-type";

export default function UsuariosPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  function handleAddUser(newUser: User) {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  return (
    <div>
      <Header />  

      <section className="mt-8 rounded-xl bg-gray-800 p-6 text-white shadow">
        <h3 className="mb-4 text-xl font-bold">Usu  ários</h3>
        <UsersTable users={users} />
      </section>
    </div>
  );
}