export type SenderType = "customer" | "agent" | "ai"

export type MessageType = "text" | "image" | "file"


export type Message = {
  id: string
  conversationId: string
  senderType: SenderType
  type: MessageType
  content: string
  createdAt: string
  createdDate: string
  isRead: boolean
}


export type ConversationStatus =
  | "needReply"
  | "answered"
  | "ai"


export type Conversation = {
  id: string

  customerName: string

  avatar: string

  lastMessage: string

  time: string

  createdDate: string

  unreadCount: number

  status: ConversationStatus

  isOnline: boolean
}