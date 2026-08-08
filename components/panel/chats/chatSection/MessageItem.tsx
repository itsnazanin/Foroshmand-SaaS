import type { Message } from "@/components/panel/chats/types"


type MessageItemProps = {
  message: Message
}


function MessageItem({
 message
}:MessageItemProps){

 const isAgent = message.senderType === "agent"

 return (
   <div
    className={`flex ${
      isAgent
      ? "justify-end"
      : "justify-start"
    }`}
   >

    <div className={`max-w-[75%] p-3 ${isAgent ? "bg-linear-to-r from-[#6F26A1] to-[#CC3965] rounded-tr-[16px] rounded-b-[16px]" : "bg-[#262626] rounded-tl-[16px] rounded-b-[16px]"}`}>

      <p>
        {message.content}
      </p>

      <span className={`text-[12px] ${isAgent? "text-[#FFFFFF]" : "text-[#A3A3A3]"}`}>
        {message.createdAt}
      </span>

    </div>

   </div>
 )
}


export default MessageItem