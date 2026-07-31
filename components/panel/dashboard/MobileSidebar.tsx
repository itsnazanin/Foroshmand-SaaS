import { LogOutIcon, PanelLeftOpen} from "lucide-react"
import Image from "next/image"
import MainLogo from "@/public/image/nurtix.png"
import { sidebarItems } from "../sidebar/sidebarItems"
import { usePathname } from "next/navigation"
import Link from "next/link"


type MobileSidebarProps = {
    open: boolean,
    onClose: () => void
}

function MobileSidebar({open, onClose}: MobileSidebarProps) {

    const pathname = usePathname()

  return (
    <>
     <div onClick={onClose} className={` fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}/>

      <aside className={`fixed top-0 right-0 h-screen w-72 bg-[#2A0E3C] rounded-tl-[24px] rounded-bl-[24px] border border-[#531C79] z-50 transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-5">
            <span className="flex items-center gap-2">
              <Image className="w-9" src={MainLogo} alt="this is main logo"/>
              <h2 className="font-bold text-[18px]">نورتیکس</h2>  
            </span>
            

            <button onClick={onClose}>
                <PanelLeftOpen className="text-[#E4E4E4] cursor-pointer" />
            </button>
        </div>
        <nav className="flex flex-col p-4 gap-2">
            {sidebarItems.map((item)=> {
                const isActive = pathname === item.href
                const Icon = item.icon
                return(
                    <div key={item.title}>
                        <Link href={item.href}>
                           <span className="w-1.5 h-6 rounded-full bg-[#8B2FC9] "/>
                            <div className={`flex w-[98%] py-3 pr-3 rounded-[12px]   items-center gap-2
                            ${isActive ? "bg-[#531C79] text-[#DCC1EF]" : "hover:bg-white/5"}`}>
                                <Icon className={`${isActive ? "text-[#DCC1EF]" : "text-[#E4E4E4]"}`} size={18}/>
                                <p>{item.title}</p>
                            </div>
                        </Link>
                     
                      
                    </div>
                )
            })}

            <nav className="text-[#EB5757] w-[96%] duration-300 cursor-pointer hover:bg-[#eb575716] rounded-[12px] p-3 mt-31 flex items-center gap-2">
              <LogOutIcon size={16} />
              <p>خروج</p>
            </nav>
        </nav>

        
      </aside>  
    </>
  )
}

export default MobileSidebar