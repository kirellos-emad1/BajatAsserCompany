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
import {

  getAllFundProfile,
} from "@/data-access/financeFund";
import { archiveCompanyFund as archiveCompany } from "@/actions/archiveCompanyFund";
import { archivePersonalFund as archivePersonal } from "@/actions/archivePersonalFund";

const page = async () => {
  const session = await auth();
  const archivePersonalFund = await getAllFundProfile();
  
  if (session?.user?.role === "ADMIN" || session?.user?.role === "MEMBER") {
    return (
      <main className=" overflow-x-auto">
        <Table className=" table-auto w-full">
          <TableHeader>
            <TableRow>
              <TableHead>الاسم الثلاثي</TableHead>
              <TableHead>البريد الالكترونى</TableHead>
              <TableHead>الهاتف / الجوال</TableHead>
              <TableHead>رقم الهويه الشخصيه</TableHead>
              <TableHead>المنطقة</TableHead>
              <TableHead>مواطن / مقيم</TableHead>
              <TableHead>الراتب</TableHead>
              <TableHead>البنك</TableHead>
              <TableHead>تعثر في سمة؟</TableHead>
              <TableHead>مخالفات مرورية؟</TableHead>
              <TableHead>قرض عقارى؟</TableHead>
              <TableHead>اقساط فيزا ؟</TableHead>
              <TableHead>اقساط سيارة ؟</TableHead>
              <TableHead>قرض شخصي ؟</TableHead>
              <TableHead>فئة السيارة</TableHead>
              <TableHead>سنة الصنع</TableHead>
              <TableHead>ماركة السيارة</TableHead>
              <TableHead>موديل</TableHead>
              <TableHead>ارشفه</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {archivePersonalFund?.map((fund) => (
              <TableRow key={fund.id}>
                <TableCell>{fund.name}</TableCell>
                <TableCell>{fund.email}</TableCell>
                <TableCell>{fund.mobile}</TableCell>
                <TableCell>{fund.personal_id}</TableCell>
                <TableCell>{fund.zone}</TableCell>
                <TableCell>{fund.salary}</TableCell>
                <TableCell>{fund.bank}</TableCell>
                <TableCell>{fund.isDisabled ? "نعم" : "لا"}</TableCell>
                <TableCell>{fund.isTrafficViolations ? "نعم" : "لا"}</TableCell>
                <TableCell>
                  {fund.haveMortgage
                    ? `نعم وقدره ${fund.valueOfMortgage}`
                    : "لا"}
                </TableCell>
                <TableCell>
                  {fund.isVisaInstallments
                    ? `نعم وقدره ${fund.valueOfVisaInstallment}`
                    : "لا"}
                </TableCell>
                <TableCell>
                  {fund.isCarInstallment
                    ? `نعم وقدره ${fund.valueOfCarInstallment}`
                    : "لا"}
                </TableCell>
                <TableCell>
                  {fund.isPersonalLoan
                    ? `نعم وقدره ${fund.valueOfPersonalLoan}`
                    : "لا"}
                </TableCell>
                <TableCell>{fund.vehicle_class}</TableCell>
                <TableCell>{fund.year_of_manufacture}</TableCell>
                <TableCell>{fund.brand}</TableCell>
                <TableCell>{fund.mobile}</TableCell>
                <TableCell>{fund.model}</TableCell>
                {!fund.isArchive && (
                  <TableCell>
                    <form
                      action={async () => {
                        "use server";
                        await archivePersonal(fund.id, true);
                      }}
                    >
                      <Button size='sm' className="font-sans"  >ارشفه</Button>
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
