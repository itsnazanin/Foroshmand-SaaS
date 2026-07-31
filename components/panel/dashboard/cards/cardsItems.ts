import { BadgeDollarSign, ClipboardClock, ClipboardList, LucideIcon, MessageCircleWarning, ShoppingBag, ShoppingBasket } from "lucide-react"

type CardsItemsType = {

    isFeatured?: boolean,
    title: string,
    icon: LucideIcon,
    href: string,
    value: number
}



export const cards:CardsItemsType[] = [
    {
        title: "سفارشات امروز",
        icon: ShoppingBag,
        isFeatured: true,
        value: 15,
        href: "/nurtix-panel/Orders"
    },
    {
        title: "سفارشات در حال انتظار",
        icon: ClipboardClock,
        href: "/nurtix-panel/Orders",
        value: 10
    },
    {
        title: "فروش امروز",
        icon: BadgeDollarSign,
        href: "/nurtix-panel/Analytics",
        value: 50
    },
    {
        title: "پیام های خوانده نشده",
        icon: MessageCircleWarning,
        href: "/nurtix-panel/Chats",
        value: 8
    }
]