"use client"

import { usePathname } from "next/navigation"
import { navigationItems } from "./navigationItems"
import Link from "next/link"



function BottomNavigation() {
   const pathname = usePathname()
   

 return(
    <>
     <div className="w-screen flex items-center justify-center h-22 border border-[#531C79] rounded-tl-[24px] rounded-tr-[24px] bg-linear-to-r from-[#2A0E3C] to-[#1C0928]">
        {navigationItems.map((item)=>{
         const isActive = pathname === item.href
         const Icon = item.icon
         

         return(
            <Link href={item.href} key={item.title}>
               <div className="flex mx-1 w-full">
                  <div className={`text-[14px] flex flex-col items-center px-2 text-[#E4E4E4] gap-1
                  ${isActive && "bg-linear-to-t from-[#FF6C98] to-[#A259D4] bg-clip-text text-transparent"}`}>
                     <Icon
                     className={`text-[#E4E4E4] ${isActive && "text-[#FF6C98]" }`} size={24}/>
                     <p>{item.title}</p>
                  </div> 
               </div>
               
            </Link>
            )
        })}
     </div>
    </>
 )
}

export default BottomNavigation