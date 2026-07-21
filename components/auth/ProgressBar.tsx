"use client"

import { usePathname } from "next/navigation"
import { Step } from "@/app/types/auth";

type ProgressBarProps = {
    steps: Step[]
}


function ProgressBar({steps}: ProgressBarProps) {
  
  const pathname = usePathname();

  const currentStep = steps.findIndex(
    (step) => step.path === pathname
  );
  

   return (
    <>
        <p className="mb-3 text-center text-sm font-medium md:hidden">
            مرحله {currentStep + 1} از {steps.length}
        </p>
        <div className="flex flex-row-reverse justify-center items-center gap-2">
            {steps.map((_, index)=>{
                    const active = index === currentStep;

                    return (
                        <div key={index} className={`rounded-full cursor-pointer mb-6 transition-all duration-300
                        ${active ? "w-19 h-2 bg-[#8B2FC9]" : "w-6 h-2 bg-[#737373] dark:bg-white"}`}
                        />
                    )
                })
            }
        </div>
    </>
  )
}

export default ProgressBar