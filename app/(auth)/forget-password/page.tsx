import AuthBanner from '@/components/auth/AuthBanner'
import AuthHeader from '@/components/auth/AuthHeader'
import BackgroundGlow from '@/components/auth/BackgroundGlow'
import ForgetPasswordForm from '@/components/auth/forms/ForgetPasswordForm'
import { ForgetPasswordSteps } from '@/components/constants/authSteps'
import { HomeIcon } from 'lucide-react'


function page() {
  return (
    <>
    <div className='relative -left-110'>
     <BackgroundGlow /> 
    </div>
    
     <div className='w-full flex justify-around gap-4 p-10'>
        <div className='w-[50%] flex flex-col gap-53'>
          <AuthHeader title='صفحه اصلی' icon={HomeIcon} href='/'/>
          <ForgetPasswordForm />
        </div>
        <AuthBanner text='برگشت به نورتیکس فقط چند قدم فاصله داره' steps={ForgetPasswordSteps}/>
     </div>
    </>
  )
}

export default page