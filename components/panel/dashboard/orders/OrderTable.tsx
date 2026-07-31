
import { orderlabel, orders } from '@/components/panel/dashboard/orders/orderItems'
import OrderAction from './OrderAction'
import OrderStatusBadge from './OrderStatusBadge'


function OrderTable() {
  return (
    <>
     <div className='w-full rounded-[24px] text-nowrap mt-3 bg-[#2A0E3C] border border-[#531C79] p-6 flex flex-col'>
        <div className='rounded-[12px] bg-[#531C79] flex gap-6'>
          {orderlabel.map((label)=>(
            <div key={label.title} className={`w-full text-center ${(label.id === 1 || label.id === 5) && "hidden lg:block"}`}>
                <p className='text-base py-3 pl-2' >
                {label.title}
                </p>
            </div>
            
          ))}
        </div>

        
           {orders.map((item)=>(
            <div key={item.id} className='flex text-nowrap pt-8 pb-3 gap-6 border-b border-b-[#531C79]'>
                <div className='text-center w-full text-[#E4E4E4] md:hidden lg:block'>
                    <p>{item.orderCode}</p>
                </div>
                <div className='w-full text-center'>
                    <p>{item.customerName}</p>
                </div>
                <div className='text-center w-full'>
                  <p>{item.productCount}</p>  
                </div>
                <div className='text-center w-full'>
                   <OrderStatusBadge status={item.status}/> 
                </div>
                <div className='text-center w-full md:hidden lg:block'>
                   <p>{item.createdAt}</p> 
                </div>
                <div className='text-center w-full'>
                  <p>{item.totalPrice} تومان</p>   
                </div>
               
                <div className='w-full relative bottom-2 text-center'>
                    <OrderAction order={item} /> 
                </div>
               
            </div>
           ))}
        
     </div>
    </>
  )
}

export default OrderTable