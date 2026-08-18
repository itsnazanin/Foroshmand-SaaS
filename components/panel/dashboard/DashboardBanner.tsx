"use client"

import Image from 'next/image'
import nurtixCharacter from "@/public/image/nurtix-characters.png"
import { X } from 'lucide-react'
import { useState } from 'react'

function DashboardBanner() {
 
  const [isOpen, setIsOpen] = useState(true)

  if(!isOpen) return null;

  return (
    <>
     <div className='w-full relative flex rounded-3xl h-35 bg-linear-to-r from-[#6F26A1] to-[#cc3965]'>
        <div className='w-[50%] h-full flex flex-col gap-2 pr-6 justify-center'>
           <h1 className='lg:text-[32px] md:text-[26px] w-full text-[16px] font-semibold md:text-nowrap'>سلام سیما به فروشمند خوش اومدی 👋🏻</h1>
           <p className='md:block lg:block hidden text-[#FFC8D8]'>با فروشمند میتونی هر چیزی رو که بخوای مدیریت کنی</p> 
        </div>
        <div className='w-[50%] flex justify-end '>
            <div className='relative md:w-50 w-30 -right-9 md:-right-22'>
                <Image fill className='object-cover' src={nurtixCharacter} alt="this is nurtix character" />
            </div>
            <button onClick={()=> setIsOpen(false)} className='absolute left-4 top-4 cursor-pointer'>
              <X size={20} className='bg-[#dcc1ef32] rounded-full w-8 h-8 p-2'/>   
            </button>
              
        </div>

     </div>
    </>
  )
}

export default DashboardBanner