import { Search } from 'lucide-react'


function SearchCustomer() {
  return (
    <>
      <div className='flex justify-between items-center'>
        <h2 className='text-[16px] font-bold'>گفتگو ها</h2>
        <span className='bg-[#6F26A1] py-1 px-2 rounded-full'>12</span>
      </div>

      <form className='flex relative mt-6 mb-4'>
        <Search size={20} className='absolute right-3 top-3.5 '/>
        <input 
        type="text" 
        className='bg-[#381350] w-full border border-transparent focus:outline-none focus:border-[#6F26A1] focus:ring-1 focus:ring-[#6F26A1] py-3 pr-10 rounded-[12px] placeholder:text-[#E4E4E4]' 
        placeholder='جستجوی مشتری ...'
        />
      </form>
    </>
  )
}

export default SearchCustomer