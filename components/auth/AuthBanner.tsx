"use client"

import { usePathname } from "next/navigation"
import ProgressBar from "./ProgressBar";
import { Step } from "@/app/types/auth";

type AuthBannerProps = {
  steps: Step[];
}

function AuthBanner({steps}:AuthBannerProps) {
  
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
    <div className="lg:w-[39%] md:w-[50%] hidden md:flex lg:px-8 items-end justify-center rounded-3xl bg-cover bg-bottom bg-no-repeat"
    style={{backgroundImage: `url(${image})`}}>
        <div className='mb-13 md:px-4 lg:px-8 md:pt-3 lg:pt-6 rounded-tl-3xl rounded-br-3xl bg-linear-to-r from-[#1C0928] to-[#381350]'>
          <p className="md:text-[16px] dark:text-[#ffffff] text-center lg:text-2xl font-bold pb-8">با نوآرا به کسب و کار های هوشمند بپیوند</p>
          <ProgressBar steps={steps}/>
        </div>
    </div>
  )
}

export default AuthBanner