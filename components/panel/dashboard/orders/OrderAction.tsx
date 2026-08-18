import { Check, CircleAlert, Hourglass } from "lucide-react";
import { Order } from "./orderItems";

export default function OrderAction({order}: {order: Order}){
    switch(order.status){
        case "در انتظار پرداخت":
            return(
                <button className="bg-[#FFB70029] text-[#FFB700] border border-[#ffb70062] cursor-pointer flex items-center justify-center gap-1 lg:text-base rounded-[12px] py-2.5 px-3">
                    در انتظار پرداخت ...
                    <Hourglass size={16}/>
                </button>
            )
        case "پرداخت شده":
            return(
                <button className=" border border-[#2cc53690] bg-[#0d7b15cb] text-white cursor-pointer flex justify-center gap-2 items-center px-5 lg:text-base rounded-[12px] py-2.5">
                    تایید برای ارسال
                    <Check  size={16}/>
                </button>
            ) 
        case "لغو شده":
            return(
                <button className="bg-[#EB575729] text-[#EB5757] border border-[#eb5757af] cursor-pointer flex justify-center gap-2.5 items-center lg:text-base rounded-[12px] py-2.5 px-9.5">
                    لغو شده
                    <CircleAlert size={16}/>
                </button>
            )  
        default:
            return null;        
    }
}