"use client";

import AuthBanner from "@/components/auth/AuthBanner";
import AuthHeader from "@/components/auth/AuthHeader";
import BackgroundGlow from "@/components/auth/BackgroundGlow";
import SignupForm from "@/components/auth/forms/SignupForm";
import GoogleButton from "@/components/auth/GoogleButton";
import { signupSteps } from "@/components/constants/authSteps";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <BackgroundGlow />

      <div className="p-10 flex justify-around gap-7 h-screen w-screen overflow-hidden">
        <div className="w-[50%]">
          <AuthHeader />
          <SignupForm />
          <GoogleButton />
          <span className="text-center">
            <p className="text-white">حساب کاربری دارید؟</p>
            <Link href={"/login"} className="text-[#B982DF]">
            ورود
            </Link>
          </span>
          
        </div>

        <AuthBanner steps={signupSteps} />
      </div>
    </div>
  );
}