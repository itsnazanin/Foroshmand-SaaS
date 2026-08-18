"use client"

import MobileOrdersCards from '@/components/panel/dashboard/OrderCards/MobileOrdersCards'
import { orders, OrderStatus } from '@/components/panel/dashboard/orders/orderItems'
import OrderTable from '@/components/panel/dashboard/orders/OrderTable'
import OrderCards from '@/components/panel/orders/Cards/OrderCards'
import MobileOrdersTabs from '@/components/panel/orders/MobileOrderTabs'
import MobileSearchSection from '@/components/panel/orders/MobileSearchSection'
import OrdersBottomSection from '@/components/panel/orders/Pagination/OrdersBottomSection'
import SearchSection from '@/components/panel/orders/SearchSection'
import { useMemo, useState } from 'react'

type TabValue = "همه" | OrderStatus

function Page() {

  const [activeTab , setActiveTab] = useState<TabValue>("همه")

  const filteredOrders = useMemo(() => {

    if (activeTab === "همه") {
      return orders
    }

    return orders.filter(
      (order) => order.status === activeTab
    )
  },[activeTab])

  return (
    <>
    {/* Desktop mode */}
     <div className="hidden md:flex flex-col w-[99%]">
       <h1 className='text-[24px] pr-2 pt-3'>سفارشات</h1>
       <OrderCards />
       <SearchSection />
       <OrderTable />
       <OrdersBottomSection />
     </div>

     {/* Mobile mode */}
        <div className="md:hidden w-full flex flex-col">
          <div className='sticky -top-4 z-50 bg-[#0E0514]'>
            <div className="flex items-center justify-between w-full px-1 pt-2">
                <h1 className='font-semibold text-[24px]'>سفارشات</h1>
                <span className="py-1.5 px-2.5 rounded-full bg-[#6F26A1] text-center">12</span>
            </div>
            <MobileSearchSection />
            <MobileOrdersTabs activeTab={activeTab} onTabChange={setActiveTab}/>
          </div>
            <div className='relative bottom-8'>
              <MobileOrdersCards orders={filteredOrders} />
            </div>
            <OrdersBottomSection />
        </div>
    </>
  )
}

export default Page