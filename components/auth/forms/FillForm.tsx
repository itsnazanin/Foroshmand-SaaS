"use client"

import { useForm } from 'react-hook-form'
import AuthInput from '../ui/AuthInput'
import AuthButton from '../ui/AuthButton'

function FillForm() {

    type FillFormData = {
        firstname: string
        lastname: string
        username: string
    }

    const {register, handleSubmit} = useForm<FillFormData>();
    const onSubmit = (data:FillFormData) => {
        console.log(data)
    }
    
  return (
    <>
     <div className="pt-30 flex flex-col items-start pr-20 md:pr-10 lg:pr-25">
        <h1 className='font-bold text-[24px] pb-8'>ساخت حساب کاربری</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[80%] [&>*:last-child]:mt-8'>
            <AuthInput 
            label='نام'
            placeholder='نام خود را وارد کنید'
            {...register("firstname",{
                required:"نام الزامی است"
            })}
            />
            <AuthInput 
            label='نام خانوادگی'
            placeholder='نام خانوادگی خود را وارد کنید'
            {...register("lastname",{
                required: "نام خانوادگی الزامی است"
            })}
            />
            <AuthInput 
            label='نام کاربری'
            placeholder='نام کاربری خود را وارد کنید'
            {...register("username",{
                required: "نام کاربری الزامی است"
            })}/>

            <AuthButton title='ایجاد حساب کاربری'/>
        </form>
     </div>
    </>
  )
}

export default FillForm