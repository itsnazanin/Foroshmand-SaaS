import SalesChartGraph from "./chart";


export default function SalesChart(){

  return (
    <div className="rounded-3xl bg-[#2A0E3C] p-6 w-full border border-[#531C79]">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-white lg:text-[20px] laptop:text-[18px] font-semibold">
          روند فروش
        </h2>
      </div>

      <SalesChartGraph />

    </div>
  )
}