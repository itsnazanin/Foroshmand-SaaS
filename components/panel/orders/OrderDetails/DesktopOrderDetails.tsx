import React from 'react'
import OrderStatusBadge from '../../dashboard/orders/OrderStatusBadge'
import Image from 'next/image'
import { orders } from '../../dashboard/orders/orderItems'
import { BadgeCheck, CalendarDays, ChevronRight, CircleAlert, Funnel, MapPin, Phone, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

function DesktopOrderDetails() {

    const order = orders.find((order) => order.id === 1)

  return (
    <>
            {/* Desktop mode */}
        <div className="w-[99%] hidden md:block">

            <div className="flex items-center gap-2">
                <Link href="/nurtix-panel/Orders">
                <ChevronRight className="text-white/80 hover:text-white" size={32}/>
                </Link>
            
            <h1 className="font-semibold text-[24px]">جزئیات سفارش</h1> 
            </div>

            <div className="bg-[#2A0E3C] mt-4 rounded-[24px] p-6 flex flex-col gap-8">
                <p className="text-[20px] text-[#e4e4e4ed]">اطلاعات سفارش</p>
                
                <div>
                
                {order && (
                    <div>

                      <div className="flex gap-4">
                        <div className="relative w-16 h-16">
                        <Image fill className="object-cover rounded-full" src={order.customerImage} alt="this is customer profile" />
                        </div>
                        <div className="flex flex-col gap-2">
                        <p className="text-[20px]">سارا رحیمی</p>
                        <p className="text-[#C3C3C3]">عضویت: 1406/05/14</p>
                        </div>
                    </div>

                    <hr className='w-full h-px border-none bg-[#531C79] mt-6 '/>
                    
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 mt-6">
                        <div className="flex flex-col items-center gap-4 border-l border-[#531C79] pl-8">
                            <div className="flex items-center gap-1.5">
                                <BadgeCheck size={14} className="text-[#C3C3C3]" />
                                <p className="text-[#C3C3C3] text-[14px]"> محصولات سفارش داده شده</p>
                            </div>
                            
                            <p className="font-semibold pr-3">3</p>
                        </div>
                        <div className="flex flex-col gap-3 items-center lg:border-l lg:border-[#531C79] pl-8">
                            <div className="flex items-center gap-1.5">
                                <CircleAlert className="text-[#C3C3C3]" size={14}/>
                                <p className="text-[#C3C3C3] text-[14px]">وضعیت سفارش اخیر</p>
                            </div>
                            <p className="text-[#FFB700] w-fit bg-[#FFB70029] py-1.5 px-3 rounded-full">در انتظار پرداخت</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 border-l border-[#531C79] pl-8">
                            <div className="flex items-center gap-1.5">
                                <CalendarDays className="text-[#C3C3C3]" size={14}/>
                                <p className="text-[#C3C3C3] text-[14px]">تاریخ ثبت آخرین سفارش</p>
                            </div>
                        
                            <p className="font-semibold">1405/09/08</p>
                        </div>
                        <div className="flex flex-col pl-5 items-center gap-4">
                            <div className="flex gap-1.5 items-center">
                                <ShoppingCart className="text-[#C3C3C3]" size={14}/>
                                <p className="text-[#C3C3C3] text-[14px]">جمع خرید کل مشتری</p>
                            </div>
                            
                            <p className="font-semibold">3000000  تومان</p>
                        </div>
                    </div>

                    <hr className='w-full h-px border-none bg-[#531C79] mt-6 '/>
                    

                    <div className="flex md:justify-around lg:justify-start lg:gap-24 md:gap-2 md:ml-19">
                        <div className="flex flex-col gap-2.5 mt-5">
                        <div className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-[#C3C3C3]"/>
                            <p className="text-[#C3C3C3] text-[14px]">آدرس</p>
                        </div>
                        <p className="text-[#E4E4E4] pr-1">تهران ، خیابان شریعتی ، نبش بانکی ملی، کوچه بهار ۱۴</p>
                        </div> 

                        <div className="flex flex-col mt-5 gap-3">
                        <div className="flex items-center gap-1.5" >
                            <Phone className="text-[#C3C3C3] -rotate-90" size={14}/>
                            <p className="text-[#C3C3C3] text-[14px]">شماره تماس</p>
                        </div>
                        <p className="text-[#E4E4E4] pr-1">09116278162</p>
                        </div>
                    </div>
                    </div>
                )}

                    


                </div>
            </div>

            <p className="text-[20px] mt-7.5 mb-4">لیست محصولات</p>

            <div className="items-center gap-4 hidden md:flex">

                <div className="border border-white/20 w-fit flex gap-2 rounded-[12px] py-3 px-4 cursor-pointer transition-colors duration-250  bg-linear-to-r from-[#FF477E] to-[#8B2FC9] hover:border-white">
                    <Funnel size={20} className="text-[#E4E4E4]"/>
                    <p className='text-[#f5F5F5] text-nowrap'>فیلتر ها</p>
                </div>
                
                <form className="relative w-full flex items-center">
                    <Search className="absolute right-4"/>
                    <input placeholder="جستجوی اسم محصول . . ." className="bg-[#3813509f] border border-[#531C79] rounded-xl p-3 pr-14 w-full text-[#e4e4e4cb] placeholder:text-[#e4e4e4cb] focus:outline-[#6F26A1]"/>
                </form>
                
            </div>

            <div className="w-full rounded-[24px] bg-[#2A0E3C] mt-4 p-4">
                <div className="bg-[#531C79] flex justify-between px-10 rounded-[12px] py-3">
                    <p className="relative lg:-left-9 laptop:left-4">کد سفارش</p>
                    <p className="relative left-7">نام محصول</p>
                    <p className="relative lg:-left-8 laptop:-left-10">تعداد</p>
                    <p className="relative lg:-left-9 laptop:-left-9">وضعیت سفارش</p>
                    <p className="relative lg:-left-9 laptop:-left-10 laptop:pl-3">قیمت محصول</p>
                    <p>مبلغ کل</p>
                </div>

                <div className='flex flex-col gap-3 mt-4'>
            {orders.map((item, index)=>(
                <div key={item.id} className='flex flex-col gap-4'>
                <div className={`flex items-center justify-between p-6 md:px-4 text-nowrap bg-[#6F26A1] hover:bg-white/5 transition-colors duration-300 cursor-pointer py-3 rounded-[18px] gap-8
                ${index % 2 === 0
                        ? "bg-[#531C79]/20"
                        : "bg-transparent hover:bg-white/10"
                    }`}>
                    <div className='text-start w-full text-[#E4E4E4]'>
                        <p>{item.orderCode}</p>
                    </div>
                    <div className='w-full relative md:left-5 text-center flex items-center lg:gap-3 md:gap-2'>
                        <div className="relative lg:w-14 lg:h-12 md:w-12 md:h-10">
                            <Image fill className="object-cover rounded-[12px]" src="data:image/jpeg;base64,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" alt="this is product image" />
                        </div>
                        <p>تیشرت سفید زارا</p>
                    </div>
                    <div className='text-center w-full relative md:left-12'>
                    <p>{item.productCount}</p>  
                    </div>
                    <div className='text-center  w-full relative md:left-15'>
                    <OrderStatusBadge status={item.status}/> 
                    </div>
                    <div className='text-center font-bold w-full relative md:left-10'>
                    <p>{item.totalPrice}</p>   
                    </div>
                    <div className="relative md:left-4 ">
                        <p>80000000</p>
                    </div>
                
                </div>
                <hr className='w-full h-px border-none bg-[#531C79]'/>
                </div>
            ))}
            
            </div>
            </div>
        </div>
    </>
  )
}

export default DesktopOrderDetails