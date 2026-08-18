import React from 'react'
import { cards } from './cardsItems'
import { ArrowUpLeft } from 'lucide-react';
import Link from 'next/link';


function DashboardCards() {
  return (
    <>
    <div className='grid lg:grid-cols-4 laptop:pb-2 grid-cols-1 gap-3 pt-4'>
        {cards.map((card)=> {
          const Icon = card.icon;
            return(
             <div key={card.title}
              className={`rounded-[24px] py-5 px-4 laptop:pr-2.5 cursor-pointer hover:bg-[#b882df34] bg-[#2A0E3C] border border-[#531C79]
              ${card.isFeatured && "bg-linear-to-r from-[#8B2FC9] to-[#FF477E] border-none"}`}>
                
                <Link href={card.href} className='flex w-full justify-between'>
                    <div className='flex gap-3 laptop:gap-4 lg:pr-2 items-center'>
                    <span
                    className={`p-3 h-fit rounded-[12px] bg-[#531C79] ${card.isFeatured && "bg-[#FF6C98]"}`}>
                    <Icon size={24} />
                    </span>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[18px] laptop:text-[16px]'>{card.title}</p>
                        <span className='flex items-center gap-1'>
                            <p className='text-[24px] font-bold'>{card.value}</p>
                            { card.title == "فروش امروز" && <p className='text-sm font-light'>تومان</p> }
                        </span>
                    </div>
                    </div>
                    <ArrowUpLeft />
                </Link>
                
             </div>
            )
        })}
    </div>
    </>
  )
}

export default DashboardCards