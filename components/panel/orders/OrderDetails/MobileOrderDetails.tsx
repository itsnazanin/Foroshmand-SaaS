import { ChevronRight, Eye, Pencil } from 'lucide-react'
import { orderProducts, orders } from '../../dashboard/orders/orderItems'
import Image from 'next/image'
import OrderStatusBadge from '../../dashboard/orders/OrderStatusBadge'
import Link from 'next/link'

function MobileOrderDetails() {
    const item = orders.find((order) => order.id === 1)
  return (
    <>
            <div className="flex flex-col md:hidden">
            <div className="flex gap-2">
                <Link href="/nurtix-panel/Orders">
                 <ChevronRight className="text-[#E4E4E4] cursor-pointer"/>
                </Link>
               
                <h1 className="text-[20px] font-semibold">اطلاعات سفارش</h1>
            </div>


            {item && (
              <div className="bg-linear-to-r from-[#531C79] to-[#2A0E3C] mt-4 rounded-[24px] flex flex-col p-4">
                
                    <div key={item.id} className="flex items-start justify-between">
                        <div className="flex gap-3">
                            <div className="relative w-16 h-16">
                                <Image fill className="object-cover rounded-full" src={item.customerImage} alt="this is customer profile"/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p>{item.customerName}</p>
                                <p className="text-[#E4E4E4]">{item.customerNumber}</p>
                            </div>
                        </div>

                        <OrderStatusBadge status={item.status} />

                    </div>

                    <p className="text-[#C3C3C3] text-[14px] pt-6">سفارش #123456</p>

                    <div className="flex items-center justify-around pt-6 gap-6">
                        <div className="flex flex-col gap-2">
                            <p className="text-[14px] text-[#C3C3C3]">تعداد محصولات</p>
                            <p className="text-center">{item.productCount}</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-[14px] text-[#C3C3C3]">تاریخ ثبت سفارش</p>
                            <p>{item.createdAt}</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-[14px] text-[#C3C3C3]">جمع خرید</p>
                            <div className="flex items-end gap-1">
                                <p>{item.totalPrice}</p>
                                <p className="text-[14px] text-[#E4E4E4]">تومان</p>
                            </div>
                            
                        </div>
                    </div>

                    <hr className="bg-[#531C79] border-none h-0.5 w-full my-4" />

                    <button className="border cursor-pointer hover:bg-white/15 bg-white/5 py-3 text-[14px] w-full rounded-[12px] border-[#E4E4E4] text-white flex items-center justify-center gap-2">
                        <Eye size={16}/>
                        مشاهده اطلاعات مشتری
                    </button>

            </div> 
            )}

            <p className="text-[18px] mt-6 mb-2 font-semibold pr-2">محصولات سفارش داده شده</p>

                   

                        {orderProducts.map((product)=> {
                            return(

                            <div key={product.id} className="bg-linear-to-r from-[#531C79] to-[#2A0E3C] rounded-[16px] p-4 flex my-1.5 justify-between">

                                <div className="flex gap-3 items-center">
                                    <div className="w-20 h-20 relative">
                                        <Image fill className="object-cover rounded-[8px]" src={product.productImage} alt="this is orders product"/>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p>مانتو اداری</p>
                                        <div className="flex gap-2">
                                            <p>{product.price}</p>
                                            <p>تومان</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="fle flex-col items-center gap-2">
                                    <div className="py-1 px-3 text-center font-bold h-fit rounded-full bg-linear-to-r mt-0.5 ml-2 to-[#A259D4] from-[#FF6C98] text-white">
                                       {product.productCount}
                                   </div>
                                   <p className="pt-2 text-[#eeeeee] text-[14px] pr-0.5">تعداد</p>
                                </div>
                                 
                              
                              </div>
                            )
                        })}

                        <p className="text-[18px] mt-6 mb-2 font-semibold pr-2">اطلاعات ارسال</p>
                        
                        {item && (
                                <div key={item.id} className="bg-[#3e0765] mx-1 pt-6 rounded-[16px] p-4">
                                     <div className="flex justify-between pb-4 border-b border-b-[#903bcd]">
                                       <p className="text-[14px] text-[#E4E4E4]">نام گیرنده</p>
                                       <p className="pl-4">{item.customerName}</p>
                                    </div>

                                     <div className="flex justify-between pt-6 pb-4 border-b border-b-[#903bcd]">
                                       <p className="text-[14px] text-[#E4E4E4]">شماره تماس</p>
                                       <p className="pl-4">{item.customerNumber}</p>
                                    </div>

                                     <div className="flex justify-between pt-6 pb-4 border-b border-b-[#903bcd]">
                                       <p className="text-[14px] text-[#E4E4E4]">آدرس</p>
                                       <p className="w-[70%] h-auto text-end pl-4">{item.address}</p>
                                    </div>

                                    <div className="flex justify-between pl-6 pt-6 pb-4 border-b border-b-[#903bcd]">
                                       <p className="text-[14px] text-[#E4E4E4]">کدپستی</p>
                                       <p>{item.id}</p>
                                    </div>

                                    <div className="flex gap-2 mt-6">
                                        
                                        <button className="w-[50%] border py-2.5 rounded-[12px]">
                                            {item.status}
                                        </button>
                                        
                                        <button className="border cursor-pointer bg-white/10 text-center w-[50%] py-2.5 rounded-[12px] flex justify-center items-center gap-2">
                                            <Pencil size={16}/>
                                            ویرایش
                                        </button>
                                    </div>
                               </div>
                            )
                        }
                        

        </div>
    </>
  )
}

export default MobileOrderDetails