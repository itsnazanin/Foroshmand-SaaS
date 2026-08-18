"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

type OrdersPaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function OrdersPagination({
  currentPage,
  totalPages,
  onPageChange,
}: OrdersPaginationProps) {
  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  )

  return (
    <Pagination dir="ltr" className="flex justify-end">
      <PaginationContent className="gap-1">

        {/* Previous */}
        <PaginationItem>
          <PaginationLink
            href="#"
            size="icon"
            onClick={(e) => {
              e.preventDefault()

              if (currentPage > 1) {
                onPageChange(currentPage - 1)
              }
            }}
          >
            <ChevronLeft size={18} />
          </PaginationLink>
        </PaginationItem>

        {/* Pages */}
        {pages.map((page) => {
          if (
            page === 1 ||
            page === totalPages ||
            Math.abs(page - currentPage) <= 1
          ) {
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault()
                    onPageChange(page)
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          }

          return null
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationLink
            href="#"
            size="icon"
            onClick={(e) => {
              e.preventDefault()

              if (currentPage < totalPages) {
                onPageChange(currentPage + 1)
              }
            }}
          >
            <ChevronRight size={18} />
          </PaginationLink>
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  )
}