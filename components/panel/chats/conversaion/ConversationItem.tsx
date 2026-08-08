"use client"

import Image from "next/image"
import { Conversation } from "@/components/panel/chats/types"

type ConversationItemProps = {
  conversation: Conversation
  isActive: boolean
  onClick: () => void
}

function ConversationItem({
  conversation,
  isActive,
  onClick,
}: ConversationItemProps) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3 p-3 cursor-pointer
        transition-all duration-300
        border-b border-white/5

        ${
          isActive
            ? "bg-white/10"
            : "hover:bg-white/5"
        }
      `}
    >
      {/* Avatar */}
      <div className="relative shrink-0 w-12 h-12">
        <Image
          src={conversation.avatar}
          fill
          alt={conversation.customerName}
          className="rounded-full object-cover"
        />

        {conversation.isOnline && (
          <span
            className="
              absolute
              bottom-0
              right-0
              w-3
              h-3
              rounded-full
              bg-green-500
              border-2
              border-[#111]
            "
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center gap-2">
          <h4 className="text-sm text-white font-medium truncate">
            {conversation.customerName}
          </h4>

          <span className="text-[11px] text-gray-400 shrink-0">
            {conversation.time}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2 mt-1">
          <p className="text-xs text-gray-400 truncate">
            {conversation.lastMessage}
          </p>

          {conversation.unreadCount > 0 && (
            <span
              className="
                min-w-5
                h-5
                px-1
                rounded-full
                bg-linear-to-r
                from-pink-500
                to-purple-600
                text-white
                text-[11px]
                flex
                items-center
                justify-around
              "
            >
              {conversation.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConversationItem