type OrderLabelType = {
    id: number
    title: string
}

export type OrderStatus =
  | "در انتظار پرداخت"
  | "ثبت شده"
  | "لغو شده";

export interface Order {
  id: number;
  orderCode: string;
  customerName: string;
  customerImage: string;
  productCount: number;
  status: OrderStatus;
  createdAt: string;
  totalPrice: number;
}

export const orderlabel: OrderLabelType[] = [
    {
      id:1,
      title:"کد سفارش"
    },
    { 
      id:2,
      title:"نام مشتری"
    },
    {
      id:3,
      title:"تعداد محصولات"
    },
    {
      id:4,
      title:"وضعیت"
    },
    {
      id:5,
      title:"تاریخ ثبت"
    },
    {
      id:6,
      title:"جمع خرید"
    },
    {
      id:7,
      title:"عملیات"
    }
]

export const orders: Order[] = [
  {
    id: 1,
    orderCode: "#24623",
    customerName: "سارا رحیمی",
    customerImage: "/image/woman.png",
    productCount: 3,
    status: "در انتظار پرداخت",
    createdAt: "1405/09/09",
    totalPrice: 3000000,
  },
  {
    id: 2,
    orderCode: "#82543",
    customerName: "سارا رحیمی",
    customerImage: "/image/woman.png",
    productCount: 2,
    status: "ثبت شده",
    createdAt: "1405/09/09",
    totalPrice: 1200000,
  },
  {
    id: 3,
    orderCode: "#92423",
    customerName: "سارا رحیمی",
    customerImage: "/image/woman.png",
    productCount: 1,
    status: "لغو شده",
    createdAt: "1405/09/09",
    totalPrice: 800000,
  },
];
