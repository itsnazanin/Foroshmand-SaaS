"use client"

import { Bell, ChevronDown, Menu } from 'lucide-react'
import Image from 'next/image'
import womanPicture from "@/public/image/woman.png"
import { useState } from 'react'
import MobileSidebar from '../dashboard/MobileSidebar'

function MobilePanelHeader() {

   const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='w-full flex items-center justify-between px-4 pb-3 mt-3'>
      <div className='flex'>
        <button onClick={() => setIsMenuOpen(true)} className='p-1.5 cursor-pointer hover:bg-[#ff6c98b5] rounded-[8px] border border-[#531C79]'>
          <Menu size={20} />
        </button>

        <MobileSidebar 
         open={isMenuOpen}
         onClose={() => setIsMenuOpen(false)}
         />


        <div className='flex items-center gap-2 pr-3'>
         <span className='relative w-8 h-8'>
          <Image fill className='object-cover rounded-full' src={womanPicture} alt="this is user profile picture" />
         </span>
         <p>سیما کریمی</p>
         <ChevronDown size={16}/>
        </div>
      </div>
      
      
      <div className='flex items-center'>
        <p className='text-[12px]'>۱۴۰۵/۰۹/۰۹</p>
        <div className='flex items-start'>
          <span className='px-1.5 rounded-full text-[12px] relative top-0.5 text-center -left-4 bg-[#EB5757]'>5</span>
          <span className='p-1.5 border border-[#531C79] rounded-[8px]'>
            <Bell size={20}/>
          </span>
        </div>

        
      </div>
    </div>
  )
}

export default MobilePanelHeader