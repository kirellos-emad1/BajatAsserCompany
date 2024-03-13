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
  getArchiveCompanyFund,
  getArchiveFundProfile,
} from "@/data-access/financeFund";

const page = async () => {
  const session = await auth();
  console.log(session);
  const archiveCompanyFund = await getArchiveCompanyFund();
  const archivePersonalFund = await getArchiveFundProfile();
  console.log(archivePersonalFund);
  if (session?.user?.role === "ADMIN" || session?.user?.role === "MEMBER") {
    return (
      <main className=" overflow-x-auto">
        <h1 className=" text-center my-8 font-sans  text-2xl">
          طلبات التمويل المؤرشفه للشركات
        </h1>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h1 className=" text-center my-8 font-sans  text-2xl">
          طلبات التمويل المؤرشفه للافراد
        </h1>
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
              <TableHead>موديلات</TableHead>
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
                <TableCell>{fund.haveMortgage ? `نعم وقدره ${fund.valueOfMortgage}` : "لا"}</TableCell>
                <TableCell>{fund.isVisaInstallments ? `نعم وقدره ${fund.valueOfVisaInstallment}` : "لا"}</TableCell>
                <TableCell>{fund.isCarInstallment ? `نعم وقدره ${fund.valueOfCarInstallment}` : "لا"}</TableCell>
                <TableCell>{fund.isPersonalLoan ? `نعم وقدره ${fund.valueOfPersonalLoan}` : "لا"}</TableCell>
                <TableCell>{fund.vehicle_class}</TableCell>
                <TableCell>{fund.year_of_manufacture}</TableCell>
                <TableCell>{fund.brand}</TableCell>
                <TableCell>{fund.mobile}</TableCell>
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
