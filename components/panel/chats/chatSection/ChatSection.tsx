"use client"

import { useState } from "react"
import TypingIndicator from "./TypingIndicator"
import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import MessageInput from "./MessageInput"

import type { Conversation, Message } from "@/components/panel/chats/types"


type ChatSectionProps = {
  conversation: Conversation,
  onOpenAi: () => void
}

const mockMessages: Message[] = [
  {
    id:"1",
    conversationId:"1",
    senderType:"customer",
    createdDate: "2025-05-25",
    type:"text",
    content:"سلام، قیمت این محصول چنده؟",
    createdAt:"12:30",
    isRead:true
  },

  {
    id:"2",
    conversationId:"1",
    senderType:"agent",
    createdDate: "2025-05-15",
    type:"text",
    content:"سلام، قیمت محصول ۵۰۰ هزار تومان هست.",
    createdAt:"12:31",
    isRead:true
  }

]



function ChatSection({
  conversation , onOpenAi
}:ChatSectionProps) {


  const [messages,setMessages] = useState<Message[]>(mockMessages)

  const [typingUser, setTypingUser] = useState<"customer" | "agent" | "ai" | null>("customer")



  const handleSend = (text:string)=>{


    const newMessage:Message = {

      id:crypto.randomUUID(),

      conversationId:conversation.id,

      senderType:"agent",

      type:"text",

      content:text,

      createdAt: new Date().toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),

      isRead:true

    }


    setMessages(prev=>[
      ...prev,
      newMessage
    ])

  }




  return (

    <div className="w-full h-full flex flex-col rounded-t-[24px] bg-[#0E0514] border border-[#a359d467]">


      <ChatHeader
        conversation={conversation}
        onOpenAi={onOpenAi}
      />


      <MessageList
        messages={messages}
      />

      {typingUser && (
        <TypingIndicator 
         type={typingUser}
         name={conversation.customerName}
        />
      )}

      <MessageInput
        onSend={handleSend}
      />


    </div>

  )

}


export default ChatSection