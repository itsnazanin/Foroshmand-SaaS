"use client"

import { useRouter } from "next/navigation"

import ConversationItem from "@/components/panel/chats/conversaion/ConversationItem"
import { conversations } from "@/components/panel/chats/conversaion/data"
import { Conversation } from "@/components/panel/chats/types"
import { TabId } from "./ChatTabs"

type ConversationListProps = {
  activeTab: TabId
  selectedConversation: Conversation | null
  setSelectedConversation: (
    conversation: Conversation
  ) => void
  mobile?: boolean
}

function ConversationList({
  activeTab,
  selectedConversation,
  setSelectedConversation,
  mobile = false,
}: ConversationListProps) {

  const router = useRouter()

  const filteredConversations = conversations.filter(
    (conversation) => {
      if (activeTab === "all") {
        return true
      }

      return conversation.status === activeTab
    }
  )

  const handleConversationClick = (
    conversation: Conversation
  ) => {
    if (mobile) {
      router.push(
        `/nurtix-panel/Chats/${conversation.id}`
      )

      return
    }

    setSelectedConversation(conversation)
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {filteredConversations.length === 0 ? (

        <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
          گفتگویی وجود ندارد
        </div>

      ) : (

        filteredConversations.map((conversation) => (

          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            isActive={
              selectedConversation?.id === conversation.id
            }
            onClick={() =>
              handleConversationClick(conversation)
            }
          />

        ))

      )}
    </div>
  )
}

export default ConversationList