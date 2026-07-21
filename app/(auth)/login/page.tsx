import AuthBanner from '@/components/auth/AuthBanner'
import AuthHeader from '@/components/auth/AuthHeader'
import LoginForm from '@/components/auth/forms/LoginForm'
import { loginSteps } from '@/components/constants/authSteps'
import { HomeIcon } from 'lucide-react'

function page() {
  return (
    <>
    <div className='flex items-center justify-center pt-10 gap-10 md:mx-8'>
      <div className='md:w-[50%] p-4 flex flex-col gap-33 relative -top-14'>
        <AuthHeader title='صفحه اصلی' icon={HomeIcon} href='/'/>
        <LoginForm />
      </div>
      <AuthBanner text='به نورتیکس خوش برگشتی' steps={loginSteps}/>      
    </div>

    </>
  )
}

export default page