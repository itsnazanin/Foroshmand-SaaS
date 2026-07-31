import clsx from "clsx";
import { OrderStatus } from "./orderItems";

type Props = {
    status: OrderStatus;
}

export default function OrderStatusBadge({status}: Props){
    return(
        <span className={clsx("rounded-full px-4 py-2",
            {
                "bg-[#FFB70029] text-[#FFB700] text-nowrap text-[12px] md:text-[16px]":
                status === "در انتظار پرداخت"
            },
            {
                "bg-[#2CC53529] text-[#2CC535] text-[12px] md:text-[16px]":
                status === "ثبت شده"
            },
            {
                "bg-[#EB575729] text-[#EB5757] text-[12px] md:text-[16px]":
                status === "لغو شده"
            }
        )}>
            {status === "در انتظار پرداخت" && "در انتظار پرداخت"}
            {status === "ثبت شده" && "ثبت شده"}
            {status === "لغو شده" && "لغو شده"}
        </span>
    )
}