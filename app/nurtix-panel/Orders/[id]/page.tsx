import { ArrowRight, BadgeCheck, CalendarDays, ChevronRight, CircleAlert, Eye, Funnel, MapPin, Pencil, PencilIcon, Phone, Search, ShoppingCart } from "lucide-react"
import Image from "next/image"
import  CustomerImage  from "@/public/image/WomanBlue.jpg"
import Link from "next/link"
import OrderStatusBadge from "@/components/panel/dashboard/orders/OrderStatusBadge"
import { orderProducts, orders } from "@/components/panel/dashboard/orders/orderItems"
import DesktopOrderDetails from "@/components/panel/orders/OrderDetails/DesktopOrderDetails"
import MobileOrderDetails from "@/components/panel/orders/OrderDetails/MobileOrderDetails"

async function page({params}: {params: {id: string}}) {

    const { id } = await params

  return (

    <>
    {/* Desktop mode */}
        <DesktopOrderDetails />

        {/* Mobile mode */}
        <MobileOrderDetails />
    </>

  )
}

export default page