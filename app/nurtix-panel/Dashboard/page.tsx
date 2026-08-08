
import DashboardBanner from '@/components/panel/dashboard/DashboardBanner'
import MobileOrdersSection from '@/components/panel/dashboard/MobileOrders/MobileOrdersSection'
import DashboardCards from '@/components/panel/dashboard/cards/DashboardCards'
import DashboardCharts from '@/components/panel/dashboard/charts/DashboardCharts'
import DashboardOrders from '@/components/panel/dashboard/orders/DashboardOrders'


function page() {
  return (
    <div className='w-[98%] h-full mr-0.5'>
      <DashboardBanner />
      <DashboardCards />
      <DashboardCharts />
      <DashboardOrders />
      <MobileOrdersSection />
    </div>
  )
}

export default page