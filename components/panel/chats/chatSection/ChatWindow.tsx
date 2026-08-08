"use client"

import ChatSection from "@/components/panel/chats/chatSection/ChatSection"
import type { Conversation } from "@/components/panel/chats/types"


type ChatWindowProps = {
  conversation: Conversation | null,
  onOpenAi: () => void
}


function ChatWindow({ conversation , onOpenAi }: ChatWindowProps) {

  if (!conversation) {
    return (
      <div className="hidden md:flex flex-1 rounded-t-[24px] border border-[#a359d467] items-center justify-center text-gray-400">
        یک گفتگو را انتخاب کنید
      </div>
    )

  }


  return (
    <div className="flex flex-1 h-full">

      <ChatSection 
        conversation={conversation}
        onOpenAi={onOpenAi}
      />

    </div>
  )
}


export default ChatWindow