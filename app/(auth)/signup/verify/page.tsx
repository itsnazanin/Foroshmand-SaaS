import AuthBanner from '@/components/auth/AuthBanner'
import AuthHeader from '@/components/auth/AuthHeader'
import BackgroundGlow from '@/components/auth/BackgroundGlow'
import VerifyCodeForm from '@/components/auth/forms/VerifyCodeForm'
import { signupSteps } from '@/components/constants/authSteps'
import { ArrowRight } from 'lucide-react'



function verify() {

  return (
    <>
    <div className='flex gap-3 md:gap-4 items-start justify-around md:p-10 '>
       <BackgroundGlow />
       <div className='md:w-[50%] flex flex-col items-center'>
        <div className='w-full'>
           <AuthHeader title='بازگشت' icon={ArrowRight} href='/signup' />
        </div>
       
        <VerifyCodeForm />
        
       </div>
       <AuthBanner text='با نورتیکس به کسب و کار های هوشمند بپیوند' steps={signupSteps} />
    </div>
    </>
  )
}

export default verify