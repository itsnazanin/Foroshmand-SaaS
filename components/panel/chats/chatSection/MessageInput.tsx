"use client"

import { useState } from "react"

import {
  Plus,
  Smile,
  ImageIcon,
  Mic,
  Send,
} from "lucide-react"

type MessageInputProps = {
  onSend: (text: string) => void
}

function MessageInput({
  onSend,
}: MessageInputProps) {

  const [text, setText] = useState("")

  const handleSend = () => {
    if (!text.trim()) return

    onSend(text.trim())
    setText("")
  }

  return (
    <div className="w-full min-w-0  border-white/10 p-2 sm:p-4">

      <div className="flex w-full min-w-0 items-center rounded-full bg-[#35124F] px-2 py-2 sm:px-3">

        {/* Plus */}
        <button
          type="button"
          className="shrink-0 text-white/70 transition hover:text-white"
        >
          <Plus size={18} />
        </button>

        {/* Smile */}
        <button
          type="button"
          className="mr-2 shrink-0 text-white/70 transition hover:text-white sm:mr-3"
        >
          <Smile size={18} />
        </button>

        {/* Image */}
        <button
          type="button"
          className="mr-2 shrink-0 text-white/70 transition hover:text-white sm:mr-3"
        >
          <ImageIcon size={18} />
        </button>

        {/* Mic */}
        <button
          type="button"
          className="mr-2 shrink-0 text-white/70 transition hover:text-white sm:mr-3"
        >
          <Mic size={18} />
        </button>

        {/* Input */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend()
            }
          }}
          placeholder="ارسال پیام..."
          className="
            min-w-0
            flex-1
            bg-transparent
            px-2
            text-[14px]
            text-white
            placeholder:text-white/40
            outline-none
            sm:px-4
            sm:text-[16px]
          "
        />

        {/* Send */}
        <button
          type="button"
          onClick={handleSend}
          disabled={!text.trim()}
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-linear-to-r
            from-fuchsia-500
            to-purple-600
            text-white
            transition-all
            duration-200
            sm:h-10
            sm:w-10
            ${
              text.trim()
                ? "cursor-pointer opacity-100 hover:scale-105"
                : "cursor-not-allowed opacity-50"
            }
          `}
        >
          <Send size={17} />
        </button>

      </div>

    </div>
  )
}

export default MessageInput