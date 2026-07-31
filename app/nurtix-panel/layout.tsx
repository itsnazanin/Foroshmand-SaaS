import { ReactNode } from "react";
import DesktopLayout from "@/components/panel/layout/DesktopPanelLayout";
import MobilePanelLayout from "@/components/panel/layout/MobilePanelLayout";

type PanelLayoutProps = {
  children: ReactNode
}

export default function PanelLayout({children}:PanelLayoutProps) {
  return (
   <>
    <div className="lg:block hidden">
       <DesktopLayout>
        {children}
       </DesktopLayout>
    </div>
    <div className="block lg:hidden">
      <MobilePanelLayout>
        {children}
      </MobilePanelLayout>
    </div>
   </>

  );
}
