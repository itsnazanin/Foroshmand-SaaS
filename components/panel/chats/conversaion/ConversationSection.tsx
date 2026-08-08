"use client"

import { useState } from "react"

import ChatTabs, { TabId } from "./ChatTabs"
import SearchCustomer from "./SearchCustomer"
import ConversationList from "./ConversationList"

import type { Conversation } from "@/components/panel/chats/types"

type ConversationSectionProps = {
  selectedConversation: Conversation | null
  setSelectedConversation: (
    conversation: Conversation
  ) => void
  mobile?: boolean
}

function ConversationSection({
  selectedConversation,
  setSelectedConversation,
  mobile = false,
}: ConversationSectionProps) {

  const [activeTab, setActiveTab] =
    useState<TabId>("all")

  return (
    <div className="w-full md:w-[20.83%] h-full flex flex-col">

      <SearchCustomer />

      <ChatTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <ConversationList
        activeTab={activeTab}
        selectedConversation={selectedConversation}
        setSelectedConversation={setSelectedConversation}
        mobile={mobile}
      />

    </div>
  )
}

export default ConversationSection