"use client"

import { useState } from "react"

import OrdersPagination from "./OrdersPagination"
import OrdersPageSize from "./OrdersPageSize"

export default function OrdersTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)


  const totalOrders = 248

  const totalPages = Math.ceil(totalOrders / pageSize)

  return (
    <div>

      <div className="flex items-center justify-between p-4">

        <OrdersPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <OrdersPageSize
          pageSize={pageSize}
          onPageSizeChange={(size) => {
            setPageSize(size)
            setCurrentPage(1)
          }}
        />
      </div>

    </div>
  )
}