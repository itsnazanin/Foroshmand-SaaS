import Image from "next/image"
import GoogleIcon from '../../public/icon/google.svg'


function GoogleButton() {

  // const loginWithGoogle = () => {
  //    window.location.href = "http://localhost:5000/api/auth/google"
  // }

  return (
    <>
    <div className='flex flex-col lg:mx-35 md:mx-10'>
        <div className='flex justify-center items-center gap-2 py-4 text-[#A3A3A3] dark:text-[#E4E4E4]'>
           <hr className="h-1 w-full"/>
           <p>یا</p>
           <hr className="h-1 w-full"/> 
        </div>
        <button className='rounded-[48px] cursor-pointer flex justify-center items-center gap-3 text-[#262626] text-[14px] border border-[#A3A3A3] dark:border-[#E4E4E4] hover:bg-[#FFFFFF14] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors duration-350 py-3 dark:text-white'>
            <Image src={GoogleIcon} width={24} height={24} alt="this is google icon" />
            ادامه با گوگل
        </button>
    </div>
    </>
  )
}

export default GoogleButton