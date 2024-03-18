import React from "react";
import { UserTableComponent } from "../_component/UserTableComponent";
import { SessionProvider } from "next-auth/react";
import { getAllUsers } from "@/data-access/user";

const page = async() => {
  const allUserData = await getAllUsers();
  return (
    <SessionProvider>
      <main className="h-screen">
        <UserTableComponent allUserData={allUserData} />
      </main>
    </SessionProvider>
  );
};

export default page;
