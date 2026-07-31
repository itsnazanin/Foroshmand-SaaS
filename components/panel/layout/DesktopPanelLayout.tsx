import { ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";
import DesktopPanelHeader from "../header/DesktopPanelHeader";
import "@/app/globals.css"


type DesktopLayoutProps = {
    children: ReactNode
}

function DesktopLayout({ children }: DesktopLayoutProps) {

  return (
    <div className="flex h-screen overflow-x-hidden bg-[#0E0514] p-6 gap-6">
      {/* <GlowPanel /> */}
      <Sidebar />

      <main className="flex flex-col w-full">
        <DesktopPanelHeader />

        <div className="h-[2800px] overflow-y-auto custom-scrollbar pt-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DesktopLayout