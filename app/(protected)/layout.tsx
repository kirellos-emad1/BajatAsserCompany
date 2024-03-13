import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Nav from "./_component/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
}
