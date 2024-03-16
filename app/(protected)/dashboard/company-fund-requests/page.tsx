import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auth } from "@/auth";
import { getAllCompanyFund } from "@/data-access/financeFund";
import { archiveCompanyFund as archiveCompany } from "@/actions/archiveCompanyFund";

const page = async () => {
  const session = await auth();
  const archiveCompanyFund = await getAllCompanyFund();

  if (session?.user?.role === "ADMIN" || session?.user?.role === "MEMBER") {
    return (
      <main className=" overflow-x-auto">
        <Table className=" table-auto w-full">
          <TableHeader>
            <TableRow>
              <TableHead>اسم الشركة / المؤسسة</TableHead>
              <TableHead>عمر المنشأة</TableHead>
              <TableHead>البريد الالكترونى</TableHead>
              <TableHead>مقر الشركة / المؤسسة</TableHead>
              <TableHead>الهاتف / الجوال</TableHead>
              <TableHead>رقم الهاتف الثابت (اختياري )</TableHead>
              <TableHead>البنك</TableHead>
              <TableHead>عدد السيارات</TableHead>
              <TableHead>ارشفه</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {archiveCompanyFund?.map((fund) => (
              <TableRow key={fund.id}>
                <TableCell>{fund.companyName}</TableCell>
                <TableCell>{fund.corporateAnniversary}</TableCell>
                <TableCell>{fund.email}</TableCell>
                <TableCell>{fund.zone}</TableCell>
                <TableCell>{fund.mobileNumber}</TableCell>
                <TableCell>{fund.telNumber || "لا يوجد"}</TableCell>
                <TableCell>{fund.bank}</TableCell>
                <TableCell>{fund.carsCount}</TableCell>
                {!fund.isArchive && (
                  <TableCell>
                    <form
                      action={async () => {
                        "use server";
                        await archiveCompany(fund.id, true);
                      }}
                    >
                      <Button size="sm" className="font-sans">
                        ارشفه
                      </Button>
                    </form>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    );
  }

  return <div>غير مسموح لك الوصول الي هذه الصفحه</div>;
};

export default page;
