"use client"

import { useState } from "react"

import ConversationSection from "@/components/panel/chats/conversaion/ConversationSection"
import ChatWindow from "@/components/panel/chats/chatSection/ChatWindow"
import AiSection from "@/components/panel/chats/AiSection/AiSection"

import type { Conversation } from "@/components/panel/chats/types"

function Chats() {

  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null)

  const [isAiOpen, setIsAiOpen] =
    useState(false)

  return (
    <div className="flex w-full h-full bg-[#2A0E3C] p-4 rounded-[24px]">

      {/* ================= DESKTOP ================= */}

      <div className="hidden md:flex w-full h-full gap-4">

        <ConversationSection
          selectedConversation={selectedConversation}
          setSelectedConversation={setSelectedConversation}
        />

        <ChatWindow
          conversation={selectedConversation}
          onOpenAi={() => setIsAiOpen(true)}
        />

        <AiSection
          onClose={() => setIsAiOpen(false)}
          isOpenAi={isAiOpen}
        />

      </div>


      {/* ================= MOBILE ================= */}

      <div className="flex md:hidden w-full h-full">

        <ConversationSection
          selectedConversation={null}
          setSelectedConversation={setSelectedConversation}
          mobile
        />

      </div>

    </div>
  )
}

export default Chats