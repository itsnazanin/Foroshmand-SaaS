"use client"

import { Search } from "lucide-react"
import { useState } from "react"
import OrderModalFilter from "./FilterSection/OrderModalFilter"
import OrderFilters from "./FilterSection/OrdersFilters"

function SearchSection() {
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="w-full flex rounded-[16px] border border-[#531C79] gap-6 p-4 mt-2 bg-[#2a0e3c9c]">

     <OrderFilters
        onClick={() => setFilterOpen(true)}
      />

      <OrderModalFilter
        open={filterOpen}
        onOpenChange={setFilterOpen}
      />


      <form className="relative w-full flex items-center">
        <Search className="absolute right-4" />

        <input
          placeholder="جستجوی سفارش، مشتری یا شماره سفارش..."
          className="bg-[#381350] border border-[#531C79] rounded-xl p-3 pr-14 w-full text-[#e4e4e4cb] placeholder:text-[#e4e4e4cb] focus:ring-2 focus:ring-[#6F26A1] outline-none"
        />
      </form>

    </div>
  )
}

export default SearchSection