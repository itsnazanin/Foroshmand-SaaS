"use client"

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { Edit } from "lucide-react";
import OtpInput from "@/components/auth/OtpInput";
import AuthButton from "@/components/auth/ui/AuthButton";


type VerifyFormData = {
  otp : string;
}

type VerifyData = {
  type: "email" | "phone"
  identifier:string
}

function ForgetPasswordOtp() {

  const [verifyData, setVerifyData] = useState<VerifyData | null>(null);

 useEffect(() => {
  const data = sessionStorage.getItem("verifyData");

  if (data) {
    setVerifyData(JSON.parse(data));
  }
}, []);


  const { handleSubmit, setValue } = useForm<VerifyFormData>({
    defaultValues:{
      otp:""
    }
  })

  const handleOtpComplete = (otp:string) => {
    setValue("otp", otp)
  }

  const onSubmit = (data:VerifyFormData) => {
    console.log(data)
  }

  return(

    <div className="pt-41 flex flex-col mx-4 lg:pr-20 w-full ml-6">

      <h1 className="dark:text-white text-[#262626] text-center md:text-start text-2xl font-bold">فراموشی رمزعبور</h1>
      <p className="text-[#a9a4a4] pt-10 pr-2 text-[14px]">
       کد تایید به {""}
      <span className="text-[#8B2FC9]">
      {verifyData?.identifier}
      </span>
      ارسال شد 
      </p>
      <p className="pb-4 pr-2">کد ارسال شده را وارد کنید</p>
      <form className="flex flex-col pr-1 items-start" onSubmit={handleSubmit(onSubmit)}>
        <OtpInput onComplete={handleOtpComplete}/>
        <div className="lg:w-115 md:w-[98%] w-full">
          <AuthButton title="تایید" />
        </div>
        
      </form>
      <span className="flex items-center gap-1">
        <Edit size={16}/>
        <p>ویرایش</p> 
      </span>
      
      
    </div>
    
  )

}
export default ForgetPasswordOtp