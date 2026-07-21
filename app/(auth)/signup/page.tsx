"use client";

import AuthBanner from "@/components/auth/AuthBanner";
import AuthHeader from "@/components/auth/AuthHeader";
import BackgroundGlow from "@/components/auth/BackgroundGlow";
import SignupForm from "@/components/auth/forms/SignupForm";
import GoogleButton from "@/components/auth/GoogleButton";
import { signupSteps } from "@/components/constants/authSteps";
import { Home } from "lucide-react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <BackgroundGlow />

      <div className="p-10 flex justify-around h-screen w-screen overflow-hidden">
        <div className="md:w-[50%] w-full lg:w-[50%]">
          <AuthHeader title="صفحه اصلی" icon={Home} href="/"/>
          <SignupForm />
          <div className="relative lg:left-16 md:left-9 ">
            <GoogleButton />
          </div>
          
          <span className="text-center lg:ml-25 md:ml-11 flex gap-2.5 justify-center pt-8">
            <p className="light:text-[#525252]">حساب کاربری دارید؟</p>
            <Link href={"/login"} className="text-[#B982DF]">
            ورود
            </Link>
          </span>
          
        </div>
          <AuthBanner text='با نورتیکس به کسب و کار های هوشمند بپیوند' steps={signupSteps} />
      </div>
    </div>
  );
}