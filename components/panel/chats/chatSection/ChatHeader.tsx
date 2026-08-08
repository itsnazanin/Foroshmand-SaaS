import Image from "next/image"
import type { Conversation } from "@/components/panel/chats/types"
import { ArrowRight, EllipsisVertical, Sparkles } from "lucide-react"
import Link from "next/link"


type ChatHeaderProps = {
  conversation:Conversation,
  onOpenAi: () => void
}


function ChatHeader({
  conversation, 
  onOpenAi
}:ChatHeaderProps){


  return (

    <div className="h-16 bg-[#2A0E3C] rounded-t-[24px] flex items-center justify-between px-4">

      <div className="flex items-center gap-3">

        <Link href={'/nurtix-panel/Chats'} className="cursor-pointer text-white/70 hover:text-white">
          <ArrowRight />
        </Link>

        <div className="relative w-10 h-10">
            <Image
             src={conversation.avatar}
             alt={conversation.customerName}
             fill
             className="rounded-full object-cover"
             />
        </div>
        


        <div>

          <h3 className="font-medium">
            {conversation.customerName}
          </h3>

            <span
            className={`text-sm ${
                conversation.isOnline
                ? "text-green-500"
                : "text-gray-400"
            }`}
            >
            {
                conversation.isOnline
                ? "آنلاین"
                : "آفلاین"
            }
            </span>


        </div>


      </div>

      <div className="flex items-center md:gap-4">
        <div onClick={onOpenAi} className="flex items-center gap-2 py-3 px-4 rounded-[48px] duration-300 hover:bg-[#ff91b21b] cursor-pointer">
          <Sparkles color="#FFB5CB" size={20} />
          <p className="bg-linear-to-r from-[#D1ACE9] to-[#FFB5CB] bg-clip-text text-transparent text-nowrap hidden md:block">دستیار هوشمند</p>
        </div>
        
          <EllipsisVertical className="text-[#E4E4E4] hover:text-wh cursor-pointer" />
         
      </div>
      


    </div>

  )
}


export default ChatHeader