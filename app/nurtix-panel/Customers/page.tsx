import OrderTable from '@/components/panel/dashboard/orders/OrderTable'
import OrdersTable from '@/components/panel/orders/Pagination/OrdersBottomSection'
import SearchSection from '@/components/panel/orders/SearchSection'
import React from 'react'

function page() {
  return (
   <>
    <div>

      <h1 className='text-[24px] mb-4 mt-4 font-semibold'>
        مشتریان
      </h1>

      <SearchSection />

      <OrderTable />
      
      <OrdersTable />
    </div>
   </>
  )
}

export default page