import Image from "next/image"
import womanPic from '@/public/image/woman.png'
import { Bell, CalendarDays, ChevronDown } from "lucide-react"
import randomLogo from "@/public/image/randomlogo.webp"

function DesktopPanelHeader() {
  return (
    <>
    <div className="w-full rounded-3xl py-1 px-6 flex justify-between items-center border border-[#531C79] bg-[#2A0E3C]">
      
        {/* Profile part */}
        <div className="flex items-center gap-6">
          {/* profile */}
          <div className="flex items-center gap-2">

           <div className="rounded-full relative w-10 h-10">
            <Image fill className="object-cover rounded-full" src={womanPic} alt="this is user picture"/>
           </div>

           <div className="flex flex-col w-fit">
            <p>سیما کریمی</p>
            <p className="text-[12px] text-[#D1ACE9]">ادمین فروش</p>
           </div>

         </div>

         {/* onlineshop name */}
          <div className="flex items-center gap-2 cursor-pointer px-3 py-2.5 my-2 rounded-[12px] duration-300 hover:bg-[#a359d441]">
            <div className="flex gap-3">
                <div className="relative w-10 h-10 rounded-full bg-white">
                  <Image fill className="object-cover rounded-full" src={randomLogo} alt="this is a logo for business"/>
                </div>
                <div className="flex flex-col">
                  <p>shopino</p>
                  <p className="text-[12px] text-[#D1ACE9]">شاپینو بهترین انتخاب برای فروشگاه اینترنتی</p>
                </div>
            </div>
            
            <ChevronDown size={20} className="pr-1" />
          </div>

        </div>
         


          {/* Date & notification part */}
         <div className="flex items-center gap-4">
            <span className="text-[16px] flex gap-2">
              <p>1405/09/09</p>
              <CalendarDays size={20}/>
            </span>

            <span className="flex cursor-pointer">
              <p className="rounded-[48px] bg-[#EB5757] w-5 h-5 relative -left-2 flex items-center justify-center pt-1 text-center text-[12px]">5</p>
              <div className="bg-[#8B2FC9] w-9 h-9 rounded-full flex items-center justify-around">
                <Bell size={20} />
              </div>
              
            </span>
         </div>
      
    </div>
    </>
  )
}

export default DesktopPanelHeader