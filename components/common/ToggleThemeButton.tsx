"use client"

import { useTheme } from "next-themes"
import { Moon , Sun } from "lucide-react";

function ToggleThemeButton() {

    const {theme , setTheme} = useTheme();
  return (
    <>
    <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer">
        {theme === "dark" ? <Moon className="w-9 h-9 p-2 rounded-full bg-[#8B2FC9]" /> :
         <Sun className="w-9 h-9 p-2 rounded-full text-white bg-[#FFB700]"/>}
    </button>
    </>
  )
}

export default ToggleThemeButton