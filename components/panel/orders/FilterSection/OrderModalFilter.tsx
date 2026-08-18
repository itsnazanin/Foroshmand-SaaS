"use client";

import { useState } from "react";
import { X, CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Slider } from "@/components/ui/slider";

interface OrderFiltersProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function OrderModalFilter({
  open,
  onOpenChange,
}: OrderFiltersProps) {
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();

  const [priceRange, setPriceRange] = useState<[number, number]>([
    0,
    10000000,
  ]);

  const handleApplyFilters = () => {
   

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        dir="rtl"
        className="
          bg-black
          text-white
          rounded-[28px]
          w-88
          md:w-150
          max-w-122.5
          p-6
          gap-0
          flex
          flex-col
          h-[70%]
          md:h-[80%]
          overflow-x-hidden
        "
      >
        {/* Header */}
        <DialogHeader className="mb-8 shrink-0 overflow-x-hidden">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              فیلتر ها
            </DialogTitle>

            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="
                rounded-full
                p-2
                hover:bg-white/10
                transition
              "
            >
              <X className="size-5" />
            </button>
          </div>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 pl-1">
          
          {/* ترتیب مرتب سازی */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">
              ترتیب مرتب سازی
            </label>

            <Select>
              <SelectTrigger
                className="
                  h-11
                  w-full
                  rounded-full
                  border-white/70
                  bg-transparent
                  text-white
                  focus:ring-0
                  focus:ring-offset-0
                "
              >
                <SelectValue placeholder="ترتیب مرتب سازی را انتخاب کنید" />
              </SelectTrigger>

              <SelectContent
                dir="rtl"
                className="
                  border-white/20
                  bg-[#3A0B54]
                  text-white
                "
              >
                <SelectItem value="جدیدترین">
                  جدیدترین
                </SelectItem>

                <SelectItem value="قدیمی ترین">
                  قدیمی‌ترین
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* مرتب سازی براساس */}
          <div className="flex flex-col gap-3 mt-8">
            <label className="text-sm font-medium">
              مرتب سازی براساس
            </label>

            <Select>
              <SelectTrigger
                className="
                  h-11
                  w-full
                  rounded-full
                  border-white/70
                  bg-transparent
                  text-white
                  focus:ring-0
                  focus:ring-offset-0
                "
              >
                <SelectValue placeholder="نوع مرتب سازی را انتخاب کنید" />
              </SelectTrigger>

              <SelectContent
                dir="rtl"
                className="
                  border-white/20
                  bg-[#3A0B54]
                  text-white
                "
              >
                <SelectItem value="قیمت">
                  قیمت
                </SelectItem>

                <SelectItem value="تاریخ ثبت">
                  تاریخ ثبت
                </SelectItem>

                <SelectItem value="وضعیت سفارش">
                  وضعیت سفارش
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* وضعیت سفارش */}
          <div className="flex flex-col gap-3 mt-8">
            <label className="text-sm font-medium">
              وضعیت سفارش
            </label>

            <Select>
              <SelectTrigger
                className="
                  h-11
                  w-full
                  rounded-full
                  border-white/70
                  bg-transparent
                  text-white
                  focus:ring-0
                  focus:ring-offset-0
                "
              >
                <SelectValue placeholder="وضعیت مورد نظر را انتخاب کنید" />
              </SelectTrigger>

              <SelectContent
                dir="rtl"
                className="
                  border-white/20
                  bg-[#3A0B54]
                  text-white
                "
              >
                <SelectItem value="در انتظار پرداخت">
                  در انتظار پرداخت
                </SelectItem>

                <SelectItem value="پرداخت شده">
                  پرداخت شده
                </SelectItem>

                <SelectItem value="لغو شده">
                  لغو شده
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* تاریخ ثبت */}
          <div className="flex flex-col gap-3 mt-8">
            <label className="text-sm font-medium">
              تاریخ ثبت
            </label>

            {/* از تاریخ */}
            <div className="flex flex-col gap-3">
              <span className="text-[12px] text-[#cecece]">
                از تاریخ
              </span>

              <Popover>
                <PopoverTrigger>
                  <button
                    type="button"
                    className="
                      flex
                      h-11
                      w-full
                      items-center
                      justify-between
                      rounded-full
                      bg-[#542078]
                      px-4
                      text-sm
                      text-white
                    "
                  >
                    <CalendarIcon className="size-5" />

                    <span
                      className={
                        fromDate
                          ? "text-white"
                          : "text-white/50"
                      }
                    >
                      {fromDate
                        ? format(fromDate, "yyyy/MM/dd")
                        : "تاریخ را انتخاب کنید"}
                    </span>
                  </button>
                </PopoverTrigger>

                <PopoverContent
                  align="center"
                  className="
                    w-auto
                    border-white/20
                    bg-[#3A0B54]
                    p-0
                    text-white
                  "
                >
                  <Calendar
                    mode="single"
                    selected={fromDate}
                    onSelect={setFromDate}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* تا تاریخ */}
            <div className="flex flex-col gap-3 mt-3">
              <span className="text-[12px] text-[#cecece]">
                تا تاریخ
              </span>

              <Popover>
                <PopoverTrigger>
                  <button
                    type="button"
                    className="
                      flex
                      h-11
                      w-full
                      items-center
                      justify-between
                      rounded-full
                      bg-[#542078]
                      px-4
                      text-sm
                      text-white
                    "
                  >
                    <CalendarIcon className="size-5" />

                    <span
                      className={
                        toDate
                          ? "text-white"
                          : "text-white/50"
                      }
                    >
                      {toDate
                        ? format(toDate, "yyyy/MM/dd")
                        : "تاریخ را انتخاب کنید"}
                    </span>
                  </button>
                </PopoverTrigger>

                <PopoverContent
                  align="center"
                  className="
                    w-auto
                    border-white/20
                    bg-[#3A0B54]
                    p-0
                    text-white
                  "
                >
                  <Calendar
                    mode="single"
                    selected={toDate}
                    onSelect={setToDate}
                    disabled={(date) =>
                      fromDate ? date < fromDate : false
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* بازه قیمت */}
          <div className="flex flex-col gap-4 mt-8 pb-6">
            <label className="text-sm font-medium">
              بازه قیمت
            </label>

            <div className="flex items-center justify-between text-sm">
              <span>
                {priceRange[0].toLocaleString()} تومان
              </span>

              <span>
                {priceRange[1].toLocaleString()} تومان
              </span>
            </div>

            <Slider
              dir="ltr"
              value={priceRange}
              onValueChange={(value) => {
                if (Array.isArray(value)) {
                  setPriceRange([
                    value[0],
                    value[1],
                  ]);
                }
              }}
              min={0}
              max={10000000}
              step={100000}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t pt-4 mt-6 shrink-0">
          <button
            type="button"
            className="
              flex-1
              bg-white/10
              rounded-[12px]
              hover:bg-white/30
              cursor-pointer
              transition-colors
              duration-250
              py-2
            "
            onClick={() => onOpenChange(false)}
          >
            انصراف
          </button>

          <button
            type="button"
            className="
              flex-1
              bg-[#8b2fc9a2]
              hover:bg-[#8b2fc9]
              border
              border-white/35
              hover:border-white/80
              transition-colors
              duration-250
              py-2
              rounded-[12px]
              cursor-pointer
            "
            onClick={handleApplyFilters}
          >
            اعمال فیلتر
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}