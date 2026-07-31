import { ChartLine, LayoutDashboard, LucideIcon, Settings, ShoppingBasket, Truck } from "lucide-react";

type NavigationItemsType = {
    title: string
    icon: LucideIcon
    href: string
}

export const navigationItems: NavigationItemsType[] = [
    {
        title: "داشبورد",
        icon: LayoutDashboard,
        href: "/nurtix-panel/Dashboard"
    },
    {
        title: "سفارشات",
        icon: ShoppingBasket,
        href: "/nurtix-panel/Orders"
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
        title: "تنظیمات",
        icon: Settings,
        href: "/nurtix-panel/Settings"
    }
]