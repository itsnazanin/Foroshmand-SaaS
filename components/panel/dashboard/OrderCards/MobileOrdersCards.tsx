"use client"

import { ArrowLeft, Eye } from "lucide-react"
import Link from "next/link"
import { orders } from "../orders/orderItems"
import OrderStatusBadge from "../orders/OrderStatusBadge"
import Image from "next/image"
import OrderAction from "../orders/OrderAction"
import { usePathname } from "next/navigation"

type Props = {
    orders?: typeof orders;
}

function MobileOrdersCards({ orders: ordersProp}: Props) {

    const displayedOrders = ordersProp ?? orders;
    const pathname = usePathname()

  return (
    <div className="pt-5 pb-3">
    
   { pathname !== "/nurtix-panel/Orders" && 
      (
       <div className="flex justify-between md:hidden laptop:hidden lg:hidden">
            <p className="text-[18px] font-semibold text-white pr-2">سفارشات</p>
            <Link href="/nortix-panel/Orders" className="flex gap-2 text-[16px]">
                <p>مشاهده همه</p>
                <ArrowLeft />
            </Link>
        </div>
      )  

   } 
        


        {displayedOrders.map((item)=>{
        return(
            <div className="w-full md:hidden laptop:hidden lg:hidden p-4 rounded-[16px] border border-white/10 bg-linear-to-r from-[#531C79] to-[#2A0E3C] flex flex-col my-3" key={item.id}>
                {/* top section */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <span className="w-12 h-12 relative">
                            <Image fill className="object-cover rounded-full" src={item.customerImage} alt="this is customer profile picture"/>
                        </span>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[18px] font-semibold">{item.customerName}</h2>
                            <div className="flex gap-2">
                                <p className="text-[16px] text-[#cfcfcf]">{item.createdTime} - </p>
                                <p className="flex items-center text-[16px] text-[#cfcfcf]">
                               {item.createdAt}
                               </p>
                            </div>
                            
                        </div>
                        
                    </div>

                    <OrderStatusBadge status={item.status}/> 
                </div>

                <hr className="bg-[#531C79] border-none my-4 h-0.5 opacity-60 rounded-full w-full"/>
                <div className="flex justify-between text-[16px] mt-3">
                    <div className="flex gap-3">
                        <p>تعداد محصولات :</p>
                        <p>{item.productCount}</p>
                    </div>
                    
                    <span className="flex gap-2">
                       <p className="text-[16px] text-[#E4E4E4]">خرید کل :</p>
                       <span className="flex gap-1">
                        <p className="font-semibold text-[16px]">{item.totalPrice}</p> 
                        <p className="text-[#E4E4E4]">تومان</p>
                       </span>
                
                    </span> 
                </div>

                <div className="flex gap-3 mt-4">
                    <div className="flex flex-col gap-2 pt-4 w-[60%]">
                        <div className="flex items-center gap-2">
                            <hr className="w-full opacity-20"/>
                            <p className="text-[#b3b3b3] text-[14px]">عملیات</p>
                            <hr className="w-full opacity-20"/>
                        </div>
                    
                        <OrderAction order={item} /> 
                    </div>

                    <div className="w-[40%] gap-2.5 flex flex-col justify-end">
                        
                        <div className="flex items-center relative top-0.5 justify-center gap-2">
                            <hr className="w-full opacity-20"/>
                            <p className="text-nowrap text-[14px] text-[#b3b3b3]">مشاهده جزییات سفارش</p>
                            <hr className="w-full opacity-20"/>
                        </div>
                        <Link href={`/nurtix-panel/Orders/${item.id}`}>
                            <button className="text-center cursor-pointer hover:bg-white/30 transation-colors duration-250 flex justify-center items-center gap-3 bg-white/20 border border-white/30 rounded-[12px] py-2.5 w-full">
                            <Eye size={16}/>
                                مشاهده
                            </button>                        
                        </Link>

                    </div>
                </div>

            </div>
            )
        })}
    </div>
  )
}

export default MobileOrdersCards