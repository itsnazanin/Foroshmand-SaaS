import AuthBanner from '@/components/auth/AuthBanner'
import AuthHeader from '@/components/auth/AuthHeader'
import BackgroundGlow from '@/components/auth/BackgroundGlow'
import FillForm from '@/components/auth/forms/FillForm'
import { signupSteps } from '@/components/constants/authSteps'
import { ArrowRight } from 'lucide-react'

function fillform() {

  return (
    <>
    <div className='flex items-start justify-around p-10'>
       <BackgroundGlow />
       <div className='w-[50%]'>
        <AuthHeader title='بازگشت' icon={ArrowRight} href='/signup' />
        <FillForm />
       </div>
       <AuthBanner text='با نورتیکس به کسب و کار های هوشمند بپیوند' steps={signupSteps} />
    </div>
    </>
  )
}

export default fillform