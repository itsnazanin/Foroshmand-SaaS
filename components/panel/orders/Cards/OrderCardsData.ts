import { CalendarDays, Handbag, Hourglass, LucideIcon, OctagonX } from "lucide-react"

type OrderCardType = {
    title: string,
    count: number,
    icon: LucideIcon,
    color: string
    bgcolor: string
}

export const ordercards: OrderCardType[] = [
    {
      title: "کل سفارشات",
      count: 248,
      icon: Handbag,
      color: "#D1ACE9",
      bgcolor: "#8b2fc94d"
    },
    {
      title: "امروز",
      count: 18,
      icon: CalendarDays,
      color: "#10B981",
      bgcolor: "#124f1559"
    },
    {
      title: "نیازمند تایید",
      count: 12,
      icon: Hourglass,
      color: "#F1C40F",
      bgcolor: "#cc920036"
    },
    {
      title: "لغو شده",
      count: 248,
      icon: OctagonX,
      color: "#F43F5E",
      bgcolor: "#f43f5e33"
    },
]