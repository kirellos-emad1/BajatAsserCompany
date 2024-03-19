import React from "react";
import { UserTableComponent } from "../_component/UserTableComponent";
import { SessionProvider } from "next-auth/react";
import { getAllUsers } from "@/data-access/user";


const page = async ()  => {
  const usersData = await getAllUsers()
  
  return (
    <SessionProvider>
      <main className="h-screen">
        <div>{JSON.stringify(usersData)}</div>
        <UserTableComponent />
      </main>
    </SessionProvider>
  );
};

export default page;
