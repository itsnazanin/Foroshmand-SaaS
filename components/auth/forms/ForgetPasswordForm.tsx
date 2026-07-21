"use client";

import { useForm } from "react-hook-form";
import AuthInput from "../ui/AuthInput";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  forgotPasswordSchema,
  ForgotPasswordFormData,
} from "@/schemas/forget-password.schema";
import AuthButton from "../ui/AuthButton";

function ForgetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    console.log(data);

    
  };

  return (
    <div className="w-full flex flex-col lg:pr-25 md:pr-8">
      <h1 className="text-[24] font-bold pb-12">فراموشی رمز عبور</h1>
      <form className="flex flex-col gap-8 lg:w-[65%] md:w-[90%]" onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          label="شماره موبایل"
          placeholder="شماره موبایل خود را وارد کنید"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <AuthButton title="ارسال کد"/>
      </form>
    </div>
  );
}

export default ForgetPasswordForm;