import { Astroid, ChartLine, LayoutDashboard, LucideIcon, MessageCircleMore, PackageSearch, PanelLeftOpen, Settings, ShoppingBasket, Tickets, Truck, Users } from "lucide-react"

type SidebarItemsType = {
    title: string,
    icon: LucideIcon
    href: string
}

export const sidebarItems : SidebarItemsType[] = [
    {
        title: "داشبورد",
        icon: LayoutDashboard,
        href: "/nurtix-panel/Dashboard"
    },
    {
        title:"گفتگوها",
        icon: MessageCircleMore,
        href: "/nurtix-panel/Chats"
    },
    {
        title: "سفارشات",
        icon: ShoppingBasket,
        href: "/nurtix-panel/Orders"
    },
    {
        title: "مشتریان",
        icon: Users,
        href: "/nurtix-panel/Customers"
    },
    {
        title: "محصولات",
        icon: PackageSearch,
        href: "/nurtix-panel/Products"
    },
    {
        title: "حمل و نقل",
        icon: Truck,
        href: "/nurtix-panel/Transportation"
    },
    {
        title: "گزارشات",
        icon: ChartLine,
        href: "/nurtix-panel/Analytics"
    },
    {
        title: "هوش مصنوعی",
        icon: Astroid,
        href: "/nurtix-panel/Ai"
    },
    {
        title: "اشتراک",
        icon: Tickets,
        href: "/nurtix-panel/Subscription"
    },
    {
        title: "تنظیمات",
        icon: Settings,
        href: "/nurtix-panel/Settings"
    }
]