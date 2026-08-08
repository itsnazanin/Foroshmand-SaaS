"use client"

import {
  Check,
  ChevronLeft,
  ShoppingBasket,
  Sparkles,
  X,
} from "lucide-react"

import ConfidenceChart from "./ConfidenceChart"
import { product } from "./productData"

type AiSectionProps = {
  onClose: () => void
  isOpenAi: boolean
}

function AiSection({
  onClose,
  isOpenAi,
}: AiSectionProps) {

  return (
    <>
      {/* ================= DESKTOP ================= */}

      <div
        className={`
          hidden
          md:flex
          h-full
          shrink-0
          flex-col
          overflow-hidden
          transition-all
          duration-300

          ${
            isOpenAi
              ? "w-3/12 opacity-100"
              : "w-0 opacity-0"
          }
        `}
      >

        {/* Header */}
        <div className="flex shrink-0 items-center justify-between">

          <div className="flex items-center gap-2 rounded-[48px] px-4 py-3 cursor-pointer duration-300 hover:bg-[#ff91b21b]">

            <Sparkles
              color="#FFB5CB"
              size={20}
            />

            <p className="bg-linear-to-r from-[#D1ACE9] to-[#FFB5CB] bg-clip-text text-transparent">
              دستیار هوشمند
            </p>

          </div>

          <ChevronLeft
            className="cursor-pointer text-[#E4E4E4] hover:text-white"
            onClick={onClose}
            size={24}
          />

        </div>


        {/* Scroll Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">

          <AiContent />

        </div>

      </div>


      {/* ================= MOBILE ================= */}

      
        <div  className={`fixed inset-0 z-50 md:hidden duration-200
                  ${ isOpenAi
                      ? "pointer-events-auto opacity-100"
                      : "pointer-events-none opacity-0"
                  }
                `}>

          {/* Backdrop */}
          <div
            onClick={onClose}
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
          />


          {/* Modal */}
          <div
            className="
              absolute
              inset-x-3
              top-12
              bottom-3
              h-[90%]
              mx-3
              flex
              flex-col
              overflow-hidden
              rounded-[24px]
              border
              border-[#a359d467]
              bg-linear-to-r
              from-[#381350]
              to-[#2A0E3C]
              shadow-2xl
            "
          >

            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">

              <div className="flex items-center gap-2">

                <Sparkles
                  color="#FFB5CB"
                  size={20}
                />

                <p className="bg-linear-to-r from-[#D1ACE9] to-[#FFB5CB] bg-clip-text text-transparent">
                  دستیار هوشمند
                </p>

              </div>

              <button
                type="button"
                onClick={onClose}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  text-white/70
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <X size={20} />
              </button>

            </div>


            {/* Scroll Content */}
            <div className="min-h-0 flex-1 overflow-y-auto hide-scrollbar p-3">

              <AiContent />

            </div>

          </div>

        </div>
      

    </>
  )
}


function AiContent() {
  return (
    <>

      {/* Status */}
      <div className="mt-4 flex items-center justify-between rounded-[12px] bg-[#1c0928] px-3 py-4">

        <p className="font-semibold">
          وضعیت
        </p>

        <div className="flex items-center rounded-[48px] bg-[#2CC53529] px-3 py-2">

          <div className="h-2 w-2 rounded-full bg-[#2CC535]" />

          <p className="pr-2 text-[14px] text-[#2CC535]">
            پاسخ خودکار فعال
          </p>

        </div>

      </div>


      {/* Customer Goal */}
      <div className="mt-3 flex items-center justify-between rounded-[12px] bg-[#1C0928] px-3 py-4">

        <p className="font-semibold">
          تشخیص هدف مشتری
        </p>

        <div className="flex items-center rounded-[48px] border border-[#6F26A1] bg-[#381350] px-3 py-2">

          <ShoppingBasket
            color="#E4E4E4"
            size={20}
          />

          <p className="pr-2 text-[14px]">
            ثبت سفارش
          </p>

        </div>

      </div>


      {/* Confidence */}
      <div className="mt-3 rounded-[12px] bg-[#1C0928]">

        <p className="pt-4 pr-4 font-semibold">
          میزان اطمینان
        </p>

        <div className="relative flex justify-center py-8">

          <ConfidenceChart value={87} />

        </div>

      </div>


      {/* Product Info */}
      <div className="mt-3 rounded-xl bg-[#1C0928] p-4">

        <p className="mb-5 font-medium text-white">
          محصول شناسایی شده
        </p>


        <div className="mt-10 grid grid-cols-2 gap-y-6 text-center">

          {product.map((item) => (

            <div key={item.id}>

              <p className="text-sm text-[#C3C3C3]">
                {item.title}
              </p>

              <p className="mt-1 text-base text-white">
                {item.data}
              </p>

            </div>

          ))}

        </div>


        <hr className="mx-2 my-5 border-[#531C79]" />


        <div className="flex justify-between px-3">

          <span className="flex gap-2 text-[#2CC535]">

            <Check />

            <p>
              موجود
            </p>

          </span>

          <p>
            در انبار
          </p>

        </div>

      </div>

    </>
  )
}

export default AiSection