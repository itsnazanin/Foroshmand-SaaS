"use client";

import clsx from "clsx";
import { OrderStatus } from "@/components/panel/dashboard/orders/orderItems";

type TabValue = "همه" | OrderStatus;

type Props = {
    activeTab: TabValue;
    onTabChange: (tab: TabValue) => void;
};

const tabs: { label: string; value: TabValue }[] = [
    {
        label: "همه",
        value: "همه",
    },
    {
        label: "در انتظار پرداخت",
        value: "در انتظار پرداخت",
    },
    {
        label: "پرداخت شده",
        value: "پرداخت شده",
    },
    {
        label: "لغو شده",
        value: "لغو شده",
    },
];

export default function MobileOrdersTabs({
    activeTab,
    onTabChange,
}: Props) {
    return (
        <div className="w-full my-4 overflow-x-auto scrollbar-hide">
            <div className="flex items-center justify-between gap-3">

                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        type="button"
                        onClick={() => onTabChange(tab.value)}
                        className={clsx(
                            "px-5 py-2.5 rounded-xl text-sm whitespace-nowrap transition-all duration-200 cursor-pointer",
                            activeTab === tab.value
                                ? "bg-linear-to-r from-[#9C3BFF] to-[#FF3B9D] text-white"
                                : "text-[#E4E4E4] hover:text-white"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}

            </div>
        </div>
    );
}