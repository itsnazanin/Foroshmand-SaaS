import React from 'react'
import SalesChart from '@/components/panel/dashboard/charts/SalesChart/index'
import OrderStatusChart from './OrderStatusChart/OrderStatusChart'

function DashboardCharts() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 pt-4">

      <div className="lg:col-span-8 laptop:col-span-7 rounded-3xl overflow-hidden">
        <SalesChart />
      </div>

      <div className="lg:col-span-4 laptop:col-span-5 rounded-3xl overflow-hidden bg-[#2A0E3C]">
        <OrderStatusChart />
      </div>
    </div>
  )
}

export default DashboardCharts