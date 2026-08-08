"use client"

import { use } from "react"
import { useState } from "react"

import ChatWindow from "@/components/panel/chats/chatSection/ChatWindow"
import AiSection from "@/components/panel/chats/AiSection/AiSection"

import { conversations } from "@/components/panel/chats/conversaion/data"

type ChatPageProps = {
  params: Promise<{
    chatId: string
  }>
}

export default function ChatPage({
  params,
}: ChatPageProps) {

  const { chatId } = use(params)

  const [isAiOpen, setIsAiOpen] =
    useState(false)

  const conversation = conversations.find(
    (item) => item.id === chatId
  )

  if (!conversation) {
    return (
      <div className="flex h-full w-full items-center justify-center text-white">
        گفتگو پیدا نشد
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">

      <ChatWindow
        conversation={conversation}
        onOpenAi={() => setIsAiOpen(true)}
      />

      <AiSection
        isOpenAi={isAiOpen}
        onClose={() => setIsAiOpen(false)}
      />

    </div>
  )
}