import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { orders } from "../orders/orderItems"
import OrderStatusBadge from "../orders/OrderStatusBadge"
import Image from "next/image"
import OrderAction from "../orders/OrderAction"


function MobileOrdersSection() {
  return (
    <div className="pt-5 pb-3">
        <div className="flex justify-between md:hidden laptop:hidden lg:hidden">
            <p className="text-[16px] font-semibold text-white">سفارشات</p>
            <Link href="/nortix-panel/Orders" className="flex gap-2">
                <p>مشاهده همه</p>
                <ArrowLeft />
            </Link>
        </div>

        {orders.map((item)=>{
        return(
            <div className="w-full md:hidden laptop:hidden lg:hidden p-4 rounded-[16px] bg-[#2A0E3C] flex flex-col my-3" key={item.id}>
                {/* top section */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <span className="w-12 h-12 relative">
                            <Image fill className="object-cover rounded-full" src={item.customerImage} alt="this is customer profile picture"/>
                        </span>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[16px] font-semibold">{item.customerName}</h2>
                            <span className="flex items-center text-[14px] text-[#E4E4E4]">
                                <p>{item.productCount} محصول</p>
                                <span className="w-1 h-1 bg-[#E4E4E4] rounded-full mx-1.5"></span>
                                <p>{item.createdAt}</p>
                            </span>
                        </div>
                        
                    </div>

                    <OrderStatusBadge status={item.status}/> 
                </div>

                <hr className="bg-[#531C79] border-none my-4 h-0.5 opacity-60 rounded-full w-full"/>
                <div className="flex justify-between text-[14px]">
                    <p className="text-[#E4E4E4]">سفارش {item.orderCode}</p>
                    <span className="flex gap-2">
                       <p className="text-[14px] text-[#E4E4E4]">جمع خرید:</p>
                       <span className="flex gap-1">
                        <p className="font-semibold text-[16px]">{item.totalPrice}</p> 
                        <p className="text-[#E4E4E4]">تومان</p>
                       </span>
                
                    </span> 
                </div>

                <div className="flex flex-col gap-2 pt-4">
                    <div className="flex items-center gap-2">
                         <p className="text-[#E4E4E4] text-[14px]">عملیات</p>
                        <hr className="w-full opacity-20"/>
                    </div>
                   
                    <OrderAction order={item} /> 
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default MobileOrdersSection