"use client"

import { Funnel, Search } from 'lucide-react'
import OrderFilters from './FilterSection/OrdersFilters'
import OrderModalFilter from './FilterSection/OrderModalFilter'
import { useState } from 'react'

function MobileSearchSection() {

      const [filterOpen, setFilterOpen] = useState(false)
  return (
    <>
    <div className='w-full relative flex items-center justify-between mt-6 gap-3'>
        <input type="text" placeholder='جستجوی نام مشتری ...' className='py-2.5 w-full bg-white/8 rounded-[12px] pr-10 placeholder:text-[14px] placeholder:text-[#E4E4E4]'/>
        <Search size={16} className='absolute right-4'/>
        <OrderFilters onClick={() => setFilterOpen(true)}/>
        
       <OrderModalFilter
         open={filterOpen}
         onOpenChange={setFilterOpen}
        />
    
    </div>
    </>
  )
}

export default MobileSearchSection