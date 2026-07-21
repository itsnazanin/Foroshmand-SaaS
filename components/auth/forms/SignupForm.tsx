"use client";

import AuthButton from "../ui/AuthButton";
import AuthInput from "../ui/AuthInput";
import { useRouter } from "next/navigation";

import { useSignupForm } from "@/hooks/useSignupForm";
import { SignupFormData } from "@/schemas/signup.schema";


function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignupForm();

  const router = useRouter()

  const onSubmit = async (data: SignupFormData) => {

    sessionStorage.setItem(
      "identifier",
      data.identifier
    )

    router.push("/signup/verify")
  };

  return (
    <div className="flex flex-col justify-start pt-31 lg:pl-50 md:pl-18 lg:pr-18">
      <h1 className="font-bold text-2xl text-nowrap">
        ساخت حساب کاربری
      </h1>

      <p className="lg:w-[82%] md:w-full pt-4 text-[16px] text-[#525252] dark:text-[#C3C3C3]">
         شما می توانید با ساختن حساب کاربری خود ، اینستاگرام خود را به کمک 
         <span className="bg-linear-to-r from-[#B982DF] to-[#FF477E] bg-clip-text text-transparent px-1"> هوش مصنوعی نوآرا </span>
          مدیریت کنید 
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-8"
      >
        <AuthInput
          label="ایمیل یا شماره موبایل"
          placeholder="ایمیل یا شماره موبایل خود را وارد کنید"
          error={errors.identifier?.message}
          {...register('identifier')}
        />

        <span className="flex gap-2">
          <input type="checkbox" className="accent-[#8B2FC9] cursor-pointer"/>
          <a href="/terms" target="_blank" className="underline text-[#B982DF]">
            شرایط و قوانین
          </a>
          <p>را می پذیرم.</p>
        </span>
        <span className="relative left-1">
          <AuthButton title=" دریافت کد یکبار مصرف" />
        </span>  
        
      </form>
    </div>
  );
}

export default SignupForm;