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
import { archiveCompanyFund as archiveCompany } from "@/actions/archiveCompanyFund";
import { archivePersonalFund as archivePersonal } from "@/actions/archivePersonalFund";

const page = async () => {
  const session = await auth();
  const archiveCompanyFund = await getArchiveCompanyFund();
  const archivePersonalFund = await getArchiveFundProfile();
  
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
                {fund.isArchive && (
                  <TableCell>
                    <form
                      action={async () => {
                        "use server";
                        await archiveCompany(fund.id, false);
                        
                      }}
                    >
                      <Button size='sm' className="font-sans" variant="destructive"> الغاء الارشفه</Button>
                    </form>
                  </TableCell>
                )}
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
                <TableCell>{fund.resident}</TableCell>
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
                <TableCell>{fund.model}</TableCell>
                {fund.isArchive && (
                  <TableCell>
                    <form
                      action={async () => {
                        "use server";
                        await archivePersonal(fund.id, false);
                      }}
                    >
                      <Button size='sm' className="font-sans"  variant="destructive"> الغاء الارشفه</Button>
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
