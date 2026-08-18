
import { orders } from '@/components/panel/dashboard/orders/orderItems'
import OrderAction from './OrderAction'
import OrderStatusBadge from './OrderStatusBadge'
import { Eye } from 'lucide-react'
import WomanWhite from "@/public/image/WomanWhite.jpg"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link'
import Image from 'next/image'

function OrderTable() {
  return (
    <>
     <div className='w-full hidden rounded-[24px] text-nowrap mt-3 bg-[#2A0E3C] border border-[#531C79] p-6 md:flex flex-col'>
        <div className='rounded-[12px] bg-[#531C79] flex lg:gap-6 laptop:gap-3 py-4 justify-around'>
          <div className='laptop:relative laptop:left-2'>
            مشتری
          </div>
          <div className='relative lg:left-0 md:left-10 laptop:left-0'>
            تعداد محصولات
          </div>
          <div className='relative md:left-16 lg:left-2 laptop:left-5'>
            وضعیت 
          </div>
          <div className='hidden lg:block relative lg:left-3 laptop:left-4'>
            تاریخ ثبت
          </div>
          <div className='relative md:left-22 lg:left-3 laptop:left-6'>
            مبلغ خرید
          </div>
          <div className='relative md:left-15 laptop:left-8'>
            عملیات
          </div>
        </div>

        <div className='flex flex-col gap-3 mt-4'>
          {orders.map((item, index)=>(
            <div key={item.id} className='flex flex-col gap-4'>
            <div className={`flex items-center text-nowrap bg-[#6F26A1] hover:bg-white/5 transition-colors duration-300 cursor-pointer py-3 px-3  rounded-[18px] lg:gap-6 md:gap-1 md:pr-4
              ${index % 2 === 0
                    ? "bg-[#531C79]/20"
                    : "bg-transparent hover:bg-white/10"
                }`}>
                <div className='w-full text-center flex items-center lg:pr-3 gap-2'>
                  <div className='relative w-9 h-9'>
                    <Image fill className='object-cover rounded-full' src={WomanWhite} alt="this is customer profile"/>
                  </div>
                    <p>{item.customerName}</p>
                </div>
                <div className='text-center w-full'>
                  <p className='lg:'>{item.productCount}</p>  
                </div>
                <div className='text-center w-full lg:'>
                   <OrderStatusBadge status={item.status}/> 
                </div>
                <div className='text-center text-[#ddb4fa] w-full md:hidden lg:block'>
                   <p className=''>{item.createdAt}</p> 
                </div>
                <div className='text-center font-bold w-full'>
                  <p className='lg:'>{item.totalPrice}</p>   
                </div>
               
                <div className='w-full flex items-center gap-2 relative bottom-0.5 text-center'>
                    <OrderAction order={item} /> 
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Link href={`/nurtix-panel/Orders/${item.id}`}>
                            <div className="text-[#E4E4E4] ml-3 lg:p-3 md:p-3 laptop:p-2 cursor-pointer bg-white/5 hover:bg-white/30 transition-colors duration-300 border border-white/14 rounded-[14px]">
                              <Eye className='lg:w-5 md:w-4' />
                            </div>
                          </Link>
                          
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>مشاهده</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                </div>
            </div>
            <hr className='w-full h-px border-none bg-[#531C79]'/>
            </div>
           ))}
           
        </div>
           
        
     </div>
    </>
  )
}

export default OrderTable