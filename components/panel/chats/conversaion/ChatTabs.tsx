"use client"

import type React from "react"

export type TabId = "all" | "unread" | "ai" | "needReply"

type Tab = {
  id: TabId
  title: string
  count: string
}

type ChatTabsProps = {
  activeTab: TabId
  setActiveTab: React.Dispatch<React.SetStateAction<TabId>>
}


const tabs: Tab[] = [

  {
    id: "all",
    title: "همه",
    count: "24"
  },

  {
    id: "ai",
    title: "هوش مصنوعی",
    count: "8"
  },

  {
    id: "needReply",
    title: "نیاز به پاسخ ادمین",
    count: "3"
  }

]




function ChatTabs({ activeTab, setActiveTab }: ChatTabsProps) {
  return (

    <div className="flex justify-around gap-2 overflow-x-auto scrollbar-none py-3">
      {tabs.map((tab)=>(
         <button key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-3 py-3 flex items-center text-sm text-nowrap rounded-full transition-all duration-300 cursor-pointer

              ${activeTab === tab.id ?
                "bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                :
                "text-gray-400 hover:text-white hover:bg-white/5"}
               `}>

            {tab.title}
            {tab.count > "0" && (
              <span className={`flex h-5 min-w-5 items-center justify-center rounded-full mr-1 px-1.5 pt-0.5 text-xs
              ${activeTab === tab.id ? "bg-white/80 text-purple-600" : "bg-white/10 text-white"}`}>
              {tab.count}
              </span>
            )}
            
            
          </button>

        ))
      }


    </div>

  )

}


export default ChatTabs