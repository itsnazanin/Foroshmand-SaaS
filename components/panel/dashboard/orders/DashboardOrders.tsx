import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import OrderTable from './OrderTable'


function DashboardOrders() {
  return (
    <>
    <div className='md:flex md:flex-col hidden'>
        <div className='flex justify-between pt-6'>
            <p className='font-semibold text-[20px]'>سفارشات</p>
            <Link href="/nurtix-panel/Orders" className='flex gap-1  text-[#E4E4E4] hover:text-[#D1ACE9] duration-150'>
                مشاهده همه
                <ChevronLeft />
            </Link>
        </div>
        <OrderTable />
    </div>
    </>
  )
}

export default DashboardOrders