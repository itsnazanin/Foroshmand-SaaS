import { ReactNode } from "react";

import MobilePanelHeader from "../header/MobilePanelHeader";
import BottomNavigation from "../mobileNavigation/‌BottomNavigation";


type Props = {
  children: ReactNode;
};

export default function MobilePanelLayout({
  children,
}: Props) {
  return (
    <div className="flex h-screen items-center flex-col bg-[#0E0514]">
      <MobilePanelHeader />

      <main className="flex-1 items-center overflow-y-auto h-fit px-4 pl-2 pt-4 pb-6">
        {children}
      </main>

      <BottomNavigation />
    </div>
  );
}