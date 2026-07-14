"use client";

import AuthBanner from "@/components/auth/AuthBanner";
import AuthHeader from "@/components/auth/AuthHeader";
import BackgroundGlow from "@/components/auth/BackgroundGlow";
import SignupForm from "@/components/auth/forms/SignupForm";
import { signupSteps } from "@/components/constants/authSteps";

export default function SignUp() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <BackgroundGlow />

      <div className="p-10 flex justify-around gap-7 h-screen w-screen overflow-hidden">
        <div className="w-[50%]">
          <AuthHeader />
          <SignupForm />
        </div>

        <AuthBanner steps={signupSteps} />
      </div>
    </div>
  );
}