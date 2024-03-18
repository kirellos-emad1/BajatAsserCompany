"use client";
import { getAllUsers } from "@/data-access/user";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { deleteUser } from "@/actions/deleteUser";
import { updateUserRoleToMember } from "@/actions/updateUserRoleToMember";
import { downgradeMemberToUser } from "@/actions/downgradeMemberToUser";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";

export const UserTableComponent = () => {
  const [allUserData, setAllUserData] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const updateQuery = (query: string) => {
    setQuery(query.trim());
  };

  const filterUser =
    query === ""
      ? allUserData
      : allUserData.filter(
          (user) =>
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.email.toLowerCase().includes(query.toLowerCase())
        );
  const { data: session } = useSession();

  useEffect(() => {
    async function getUserData() {
      const res = await fetch("/api/user-data");
      const data = await res.json();
      setAllUserData(data);
    }
    getUserData();
  }, []);

  if (session?.user?.role === "ADMIN" || session?.user?.role === "MEMBER") {
    return (
      <main dir="rtl" className="overflow-x-auto">
        <div className="flex my-5 items-center">
          <div className="flex w-full gap-2 max-w-sm items-center">
            <Input
              name="query"
              className="rounded-lg placeholder:font-sans"
              placeholder="بحث..."
              type="search"
              value={query}
              onChange={(e) => updateQuery(e.target.value)}
            />
            <Button
              onClick={() => updateQuery(query)}
              className="rounded-lg"
              type="submit"
            >
              <IoSearchOutline />
            </Button>
          </div>
        </div>
        <Table dir="ltr" className=" font-sans table-auto w-full">
          <TableHeader>
            <TableRow>
              <TableHead>الاسم</TableHead>
              <TableHead>البريد الالكتروني</TableHead>
              <TableHead>الوظيفة</TableHead>
              {session.user.role !== "MEMBER" && (
                <>
                  <TableHead>حذف المستخدم</TableHead>
                  <TableHead>ترقيه الي موظف | خفض الي مستخدم عادي</TableHead>
                </>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterUser.map((user) =>
              user.role !== "ADMIN" ? (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  {user.role === "USER" ? (
                    <>
                      <TableCell>مستخدم</TableCell>
                      {session.user.role !== "MEMBER" && (
                        <>
                          <TableCell>
                            <form
                              onSubmit={async (e) => {
                                e.preventDefault();
                                await deleteUser(user.id);
                                const res = await fetch("/api/user-data");
                                const data = await res.json();
                                setAllUserData(data);
                              }}
                            >
                              <Button
                                variant="destructive"
                                size="sm"
                                type="submit"
                                className="hover:bg-white hover:text-destructive"
                              >
                                حذف
                              </Button>
                            </form>
                          </TableCell>
                          <TableCell>
                            <form
                              onSubmit={async (e) => {
                                e.preventDefault();
                                await updateUserRoleToMember(
                                  user.id,
                                  session.user.id!
                                );
                                const res = await fetch("/api/user-data");
                                const data = await res.json();
                                setAllUserData(data);
                              }}
                            >
                              <Button size="sm" type="submit">
                                ترقية إلى موظف
                              </Button>
                            </form>
                          </TableCell>
                        </>
                      )}
                    </>
                  ) : user.role === "MEMBER" ? (
                    <>
                      <TableCell>موظف</TableCell>
                      {session.user.role !== "MEMBER" && (
                        <>
                          <TableCell>
                            <form
                              onSubmit={async (e) => {
                                e.preventDefault();
                                await deleteUser(user.id);
                                const res = await fetch("/api/user-data");
                                const data = await res.json();
                                setAllUserData(data);
                              }}
                            >
                              <Button
                                variant="destructive"
                                size="sm"
                                type="submit"
                                className="hover:bg-white hover:text-destructive"
                              >
                                حذف
                              </Button>
                            </form>
                          </TableCell>
                          <TableCell>
                            <form
                              onSubmit={async (e) => {
                                e.preventDefault();
                                await downgradeMemberToUser(
                                  user.id,
                                  session.user.id!
                                );
                                const res = await fetch("/api/user-data");
                                const data = await res.json();
                                setAllUserData(data);
                              }}
                            >
                              <Button
                                size="sm"
                                variant="secondary"
                                className=" text-destructive"
                                type="submit"
                              >
                                إرجاع إلى مستخدم عادي
                              </Button>
                            </form>
                          </TableCell>
                        </>
                      )}
                    </>
                  ) : null}
                </TableRow>
              ) : null
            )}
          </TableBody>
        </Table>
      </main>
    );
  }

  return <div>غير مسموح لك الوصول الي هذه الصفحه</div>;
};
