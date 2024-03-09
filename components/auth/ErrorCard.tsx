import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "./CardWrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="حدث خطا"
      backButtonHref="/auth/login"
      backButtonLabel="الرجوع الي صفحه تسجيل الدخول"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className=" text-destructive font-sans" />
      </div>
    </CardWrapper>
  );
};
