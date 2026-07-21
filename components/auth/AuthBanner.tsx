"use client"

import { usePathname } from "next/navigation"
import ProgressBar from "./ProgressBar";
import { Step } from "@/app/types/auth";

type AuthBannerProps = {
  steps: Step[];
  text:string
}

function AuthBanner({steps , text}:AuthBannerProps) {
  
  const pathname = usePathname()
  
  const authImages = {
    "signup": "/image/signup.png",
    "login": "/image/login.png",
    "forget-password": "/image/forget-password.png"
  }

  const image = Object.entries(authImages).find(([key]) => 
    pathname.includes(key)
  )?.[1];

  return (
    <div className="lg:w-[39%] md:w-[50%] hidden md:flex h-200 lg:px-8 items-end justify-center rounded-3xl bg-cover bg-bottom bg-no-repeat"
    style={{backgroundImage: `url(${image})`}}>
        <div className='mb-13 w-full md:mx-8 lg:px-8 md:pt-3 lg:pt-6 rounded-tl-3xl rounded-br-3xl bg-[#ffffff] dark:bg-linear-to-r dark:from-[#1C0928] dark:to-[#381350]'>
          <p className="md:text-[18px] py-2 drop-shadow-[0px_0px_42px_rgba(255,0,123,0.9)] bg-linear-to-r from-[#A259D4] to-[#FF6C98] bg-clip-text text-transparent text-center lg:text-2xl font-bold pb-8">{text}</p>
          <ProgressBar steps={steps}/>
        </div>
    </div>
  )
}

export default AuthBanner