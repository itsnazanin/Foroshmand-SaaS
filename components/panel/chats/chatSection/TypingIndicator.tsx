"use client"

type TypingUser = "customer" | "agent" | "ai"

type TypingIndicatorProps = {
  type: TypingUser
  name?: string
}

function TypingIndicator({
  type,
  name,
}: TypingIndicatorProps) {

  const label =
    type === "ai"
      ? "دستیار هوشمند در حال نوشتن"
      : type === "customer"
      ? `${name ?? "مشتری"} در حال نوشتن`
      : "در حال نوشتن"

  return (
    <div className="flex items-center gap-2 px-4 py-2">

      {type === "ai" && (
        <span className="text-[#FFB5CB] animate-pulse">
          ✨
        </span>
      )}

      <span className="text-xs text-white/50">
        {label}
      </span>

      <div className="flex items-center gap-1">

        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.3s]" />

        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:-0.15s]" />

        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50" />

      </div>

    </div>
  )
}

export default TypingIndicator