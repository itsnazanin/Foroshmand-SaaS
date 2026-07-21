"use client"

import Link from "next/link"
import GoogleButton from "../GoogleButton"
import AuthButton from "../ui/AuthButton"
import AuthInput from "../ui/AuthInput"
import { useForm, SubmitHandler } from "react-hook-form"

  type LoginFormData = {
    phone: string;
    password: string
  }

function LoginForm() {

const { register, handleSubmit} = useForm<LoginFormData>()
const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
  console.log(data)
}

  return (
    <div className='flex flex-col w-full items-start'>
      <h1 className="text-[24px] font-bold pr-4 lg:pr-15 pb-10">ورود</h1>
     
      <form onSubmit={handleSubmit(onSubmit)}
       className="lg:w-[65%] w-full flex gap-4 [&>*:last-child]:mt-4 flex-col px-4 lg:pr-15">
        <AuthInput 
        label="شماره موبایل" 
        placeholder="شماره موبایل خود را وارد کنید"
        {...register("phone", {
          required: "شماره موبایل الزامی است"
        })}/>
        <AuthInput 
        label="رمزعبور" 
        placeholder="رمزعبور خود را وارد کنید"
        {...register("password", {
          required: "رمزعبور الزامی است"
        })}/>
        <Link href="/forget-password" className="text-[#FF6C98] text-[14px]">فراموشی رمز عبور</Link>
        <AuthButton title="ورود"/>
      </form>
      
      <div className="lg:w-[91%] w-full px-4 relative lg:left-20">
        <GoogleButton />
        <span className="w-full pt-8 text-[14px] flex gap-2 justify-center">
          <p>حساب کاربری ندارید؟</p>
          <Link href="/signup" className="text-[#B982DF] cursor-pointer">ثبت نام</Link>
        </span>
      </div>
      
    </div>
  )
}

export default LoginForm