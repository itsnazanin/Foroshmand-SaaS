import Link from 'next/link'
import ToggleThemeButton from '../common/ToggleThemeButton'
import { LucideIcon } from 'lucide-react'



type AuthHeaderType = {
  title: string
  href: string
  icon: LucideIcon
}
function AuthHeader({title, href , icon: Icon}:AuthHeaderType) {
  return (
    <>
     <div className="flex justify-between space-x-49 items-center md:pl-10 pt-4">
        <span>
          <Link className="flex gap-2 text-[#B982DF]" href={href}>
          <Icon size={20} />
           <p className="cursor-pointer text-nowrap">{title}</p>
          </Link>
        </span>
        <ToggleThemeButton />
     </div>
    </>
  )
}

export default AuthHeader