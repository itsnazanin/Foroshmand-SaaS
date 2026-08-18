"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { usePathname } from "next/navigation"

type OrdersPageSizeProps = {
  pageSize: number
  onPageSizeChange: (size: number) => void
}

export default function OrdersPageSize({
  pageSize,
  onPageSizeChange,
}: OrdersPageSizeProps) {



  return (
    <div className="flex items-center gap-3">

      <span className=" hidden md:block text-sm text-muted-foreground text-nowrap">
        نمایش در هر صفحه
      </span>


      <Select
        value={String(pageSize)}
        onValueChange={(value) => {
          onPageSizeChange(Number(value))
        }}
      >
        <SelectTrigger className="w-20">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}