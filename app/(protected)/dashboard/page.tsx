import React from "react";
import { UserTableComponent } from "../_component/UserTableComponent";
import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <SessionProvider>
      <UserTableComponent />
    </SessionProvider>
  );
};

export default page;
