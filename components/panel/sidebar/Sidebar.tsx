"use client";

import Image from "next/image";
import nurtix from "@/public/image/nurtix.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { LogOut, PanelLeftOpen } from "lucide-react";
import { sidebarItems } from "./sidebarItems";

function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <aside
      className={`
        w-full
        h-full
        rounded-3xl
        py-6 px-6 laptop:px-5
        flex flex-col gap-10
        bg-linear-to-r from-[#2A0E3C] to-[#1C0928]
        transition-all duration-300
        ${isCollapsed ? "lg:w-[18%]" : "lg:w-[7%]"}
      `}
    >
      
      <div className="flex items-center justify-between">
        {isCollapsed && (
          <span className="flex items-center">
            <Image
              className="w-8 h-8 laptop:w-6 laptop:h-6"
              src={nurtix}
              alt="Nurtix Logo"
            />
            <h1 className="pr-2 font-semibold laptop:text-[14px]">فروشمند</h1>
          </span>
        )}

        <PanelLeftOpen
          onClick={() => setIsCollapsed((prev) => !prev)}
          className={`w-6 h-6 cursor-pointer text-[#e4e4e4cb] laptop:w-5 laptop:h-5 transition-all 
            ${!isCollapsed && "mx-auto"}`}
        />
      </div>

      
      <div
        className={`
          flex-1
          mt-8
          flex flex-col
          ${isCollapsed ? "gap-3" : "gap-2"}
        `}
      >
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <div key={item.href}>
              <div
                className={`flex items-center gap-2 laptop:gap-1  ${
                  !isCollapsed ? "relative -right-2" : ""
                }`}
              >
                <div className="relative -right-2">
                  {isActive && (
                    <span className="absolute right-2.5 -top-3 w-1.5 h-6 rounded-full bg-[#8B2FC9]" />
                  )}
                </div>

                <Link
                  href={item.href}
                  className={`
                    flex w-full items-center rounded-xl gap-2
                    transition-all duration-300

                    ${
                      !isCollapsed
                        ? "justify-center laptop:py-3 laptop:mr-2 lg:py-2.5 lg:mx-2"
                        : "lg:px-5 lg:py-2.5 laptop:pr-2 laptop:pl-0 "
                    }

                    ${
                      isActive
                        ? "bg-[#531C79] text-white"
                        : "text-gray-300 hover:bg-white/5"
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 text-[#e4e4e4cb] relative lg:right-1
                     ${!isCollapsed && "justify-center w-full laptop:w-6 relative laptop:right-0.5 laptop:mr-1"}`} />

                  <p
                    className={`
                      overflow-hidden
                      whitespace-nowrap
                      relative top-0.5 laptop:text-[16px]
                      transition-all duration-300 ease-out

                      ${
                        isCollapsed
                          ? "max-w-40 opacity-100 translate-x-0 laptop:pl-2 pr-1"
                          : "max-w-0 opacity-0 -translate-x-2"
                      }
                    `}
                  >
                    {item.title}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      
      <div
        className={`
          mt-auto
          mb-4
          flex items-center gap-2
          text-[#EB5757]
          transition-all
          ${isCollapsed ? "pr-5" : "justify-center"}
        `}
      >
        <LogOut size={20} />

        {isCollapsed && <p>خروج</p>}
      </div>
    </aside>
  );
}

export default Sidebar;