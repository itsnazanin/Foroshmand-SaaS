import AuthBanner from '@/components/auth/AuthBanner'
import AuthHeader from '@/components/auth/AuthHeader'
import ForgetPasswordOtp from '@/components/auth/forms/ForgetPasswordOtp'
import { ForgetPasswordSteps } from '@/components/constants/authSteps'
import { ArrowRight } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div className='flex p-10 justify-around item'>
       <div className='w-[50%]'>
        <AuthHeader href="/forget-password" icon={ArrowRight} title='بازگشت'/>
        <ForgetPasswordOtp />
       </div>
       <AuthBanner steps={ForgetPasswordSteps} text='بازگشت به نورتیکس فقط چند قدم فاصله داره'/>
    </div>
  )
}

export default page