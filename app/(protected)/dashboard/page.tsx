import React from "react";
import { UserTableComponent } from "../_component/UserTableComponent";
import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <SessionProvider>
      <main className="h-screen">
        <UserTableComponent />
      </main>
    </SessionProvider>
  );
};

export default page;
