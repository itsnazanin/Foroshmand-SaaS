"use client";

import { useMemo } from "react";
import MessageItem from "./MessageItem";
import type { Message } from "@/components/panel/chats/types";
import { getDateKey, formatChatDate } from "@/app/utils/date"; 

type MessageListProps = {
  messages: Message[];
};

function MessageList({ messages }: MessageListProps) {
  const groupedMessages = useMemo(() => {
    const groups: {
      dateKey: string;
      dateLabel: string;
      messages: Message[];
    }[] = [];

    messages.forEach((msg) => {
      const dateKey = getDateKey(msg.createdDate);
      const lastGroup = groups[groups.length - 1];

      if (!lastGroup || lastGroup.dateKey !== dateKey) {
        groups.push({
          dateKey,
          dateLabel: formatChatDate(msg.createdDate),
          messages: [msg],
        });
      } else {
        lastGroup.messages.push(msg);
      }
    });

    return groups;
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {groupedMessages.map((group) => (
        <div key={group.dateKey}>
          {/* جداکننده تاریخ */}
          <div className="flex justify-center my-4">
            <span className="bg-gray-800/60 text-gray-300 text-xs px-3 py-1 rounded-full">
              {group.dateLabel}
            </span>
          </div>

          {/* پیام‌های اون روز */}
          <div className="space-y-3">
            {group.messages.map((message) => (
              <MessageItem key={message.id} message={message} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;