import AuthBanner from '@/components/auth/AuthBanner'
import AuthHeader from '@/components/auth/AuthHeader'
import BackgroundGlow from '@/components/auth/BackgroundGlow'
import AuthButton from '@/components/auth/ui/AuthButton'
import { signupSteps } from '@/components/constants/authSteps'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import InstagramLogo from './../../../../public/icon/instagram.svg'

function connectApp() {

  return (
    <>
    <div className='flex items-start justify-around md:p-10 mx-4'>
       <BackgroundGlow />
       <span className='absolute -top-1 md:top-18 lg:-right-13 md:-right-30 -right-15 md:w-125 md:h-125 w-90 h-90 bg-[radial-gradient(circle,rgba(255,71,126,0.4)_0%,rgba(255,71,126,0.5)_0%,rgba(255,71,126,0.27)_0%,transparent_70%)]' />
       <Image className='absolute md:top-66 top-34 lg:top-66 lg:right-38.25 md:right-20 right-22' src={InstagramLogo} alt="this is instagram logo"/>
       <div className='md:w-[50%] sm:w-full flex flex-col gap-58 md:gap-83 lg:gap-83 justify-between'>
        <AuthHeader title='بازگشت' icon={ArrowRight} href='/signup' />
         
         <div className='flex flex-col md:w-[80%] lg:pr-20 md:pr-5 items-center space-y-3 [&>*:last-child]:mt-5'>
          <span className='flex text-center font-bold text-[18px] lg:text-[24px] md:text-[20px] dark:text-white text-[#525252] whitespace-nowrap'> 
            <h1>حالا کسب و کارت رو به</h1>
            <p className='px-1 bg-linear-to-r from-[#B982DF] to-[#FF477E] bg-clip-text text-transparent'>نورتیکس </p>
            <h1>متصل کن!</h1>
          </span>
          
          <p className='text-[14px] md:text-[16px] text-[#737373] dark:text-[#e4e4e4]'>فروشگاهت رو انتخاب کن</p>
          <AuthButton className='cursor-pointer text-[14px]' title='انتخاب فروشگاه'/>
         </div>
         
       </div>
       <AuthBanner text='با نورتیکس به کسب و کارهای هوشمند بپیوند' steps={signupSteps} />
    </div>
    </>
  )
}

export default connectApp