import Link from 'next/link'
import ToggleThemeButton from '../common/ToggleThemeButton'
import { Home } from 'lucide-react'

function AuthHeader() {
  return (
    <>
     <div className="flex justify-between pt-4">
        <span>
          <Link className="flex gap-2 text-[#B982DF]" href="/">
          <Home size={20} />
           <p className="cursor-pointer">صفحه اصلی</p>
          </Link>
        </span>
        <ToggleThemeButton />
     </div>
    </>
  )
}

export default AuthHeader