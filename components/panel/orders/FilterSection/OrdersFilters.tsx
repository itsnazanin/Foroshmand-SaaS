import { Funnel } from "lucide-react"

interface FiltersProps {
  onClick: () => void
}

function OrderFilters({ onClick }: FiltersProps) {
  return (
    <button
      onClick={onClick}
      className="border border-[#dcdbdb36] bg-linear-to-r from-[#FF477E] to-[#8B2FC9] w-fit flex gap-2 rounded-[12px] py-3 px-4 cursor-pointer transition-colors duration-250 hover:bg-[#8b2fc974] hover:border-white/60"
    >
      <Funnel size={20} className="text-[#E4E4E4]" />

      <p className="text-white font-semibold text-nowrap">
        فیلتر ها
      </p>
    </button>
  )
}

export default OrderFilters