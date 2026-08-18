import { ordercards } from './OrderCardsData';

function OrderCards() {
  return (
    <>
    <div className='grid lg:grid-cols-4 laptop:pb-2 grid-cols-2 gap-2.5 md:mb-3 lg:gap-3 pt-3'>
        {ordercards.map((card)=> {
          const Icon = card.icon;
            return(
             <div key={card.title}
              className="rounded-[24px] py-5 px-4 laptop:pr-2.5 cursor-pointer bg-[#2A0E3C] border border-[#531C79]">
                
                    <div className='flex laptop:gap-5 md:gap-4 pr-4 items-center'>
                        <span
                          className={`p-4 h-fit rounded-[12px]`}
                          style={{ color: card.color , backgroundColor: card.bgcolor }}>
                          <Icon size={24} />
                        </span>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[18px] laptop:text-[18px]'
                             style={{ color: card.color }}
                            >
                            {card.title}</p>
                            <span className='flex items-center gap-2'>
                                <p className='text-[24px]'>{card.count}</p>
                                <p className='text-[#e4e4e4cb] text-[14px]'>سفارش</p>
                            </span>
                            
                        </div>
                    </div>
                
             </div>
            )
        })}
    </div>
    </>
  )
}

export default OrderCards