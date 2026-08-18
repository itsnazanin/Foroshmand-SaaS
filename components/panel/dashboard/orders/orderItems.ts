type OrderLabelType = {
    id: number
    title: string
    forStyling?: boolean;
}

export type OrderStatus =
  | "در انتظار پرداخت"
  | "پرداخت شده"
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
  customerNumber: number;
  createdTime: string;
  address: string
}

export type OrderProductsType = {
  id: number, 
  productName: string,
  price: string,
  productImage: string,
  productCount: number
}

export const orderlabel: OrderLabelType[] = [

    { 
      id:1,
      title:"مشتری",
      
    },
    {
      id:2,
      title:"تعداد محصولات",
      forStyling:true
    },
    {
      id:3,
      title:"وضعیت",
      forStyling: true
    },
    {
      id:4,
      title:"تاریخ ثبت",
      forStyling: true
    },
    {
      id:5,
      title:"مبلغ",
      forStyling:true
    },
    {
      id:6,
      title:"عملیات",
      forStyling: true
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
    customerNumber: 9118226351,
    createdTime: "10:35",
    address: "خیابان بابل ، کوچه نشاط ، جنب مغازه کریمی"
  },
  {
    id: 2,
    orderCode: "#82543",
    customerName: "سارا رحیمی",
    customerImage: "/image/woman.png",
    productCount: 2,
    status: "پرداخت شده",
    createdAt: "1405/09/09",
    totalPrice: 1200000,
    customerNumber: 9227163526,
    createdTime: "11:22",
    address: "خیابان بابل ، کوچه نشاط ، جنب مغازه کریمی"
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
    customerNumber: 9338273390,
    createdTime: "12:50",
    address: "خیابان بابل ، کوچه نشاط ، جنب مغازه کریمی"
  },  
  {
    id: 4,
    orderCode: "#24323",
    customerName: "سارا رحیمی",
    customerImage: "/image/woman.png",
    productCount: 3,
    status: "در انتظار پرداخت",
    createdAt: "1405/09/09",
    totalPrice: 3000000,
    customerNumber: 9221836111,
    createdTime: "8:12",
    address: "خیابان بابل ، کوچه نشاط ، جنب مغازه کریمی"
  },
  {
    id: 5,
    orderCode: "#8253443",
    customerName: "سارا رحیمی",
    customerImage: "/image/woman.png",
    productCount: 2,
    status: "پرداخت شده",
    createdAt: "1405/09/09",
    totalPrice: 1200000,
    customerNumber: 9118252267,
    createdTime:"9:14",
    address: "خیابان بابل ، کوچه نشاط ، جنب مغازه کریمی"
  },
  {
    id: 6,
    orderCode: "#924823",
    customerName: "سارا رحیمی",
    customerImage: "/image/woman.png",
    productCount: 1,
    status: "لغو شده",
    createdAt: "1405/09/09",
    totalPrice: 800000,
    customerNumber: 9228337190,
    createdTime: "4:55",
    address: "خیابان بابل ، کوچه نشاط ، جنب مغازه کریمی"
  },
];

export const orderProducts: OrderProductsType[] = [
  {
    id:1,
    productName: "مانتو اداری",
    price: "3000000",
    productImage: "https://mantoform.com/wp-content/uploads/2022/09/InShot_%DB%B2%DB%B0%DB%B2%DB%B3%DB%B0%DB%B3%DB%B0%DB%B3_%DB%B1%DB%B5%DB%B0%DB%B3%DB%B5%DB%B6%DB%B2%DB%B0%DB%B4-scaled.jpg",
    productCount: 3
  },
  {
    id:2,
    productName: "تیشرت طرح ماه",
    price: "750000",
    productImage: "https://luxurydress.ir/wp-content/uploads/2026/06/%D8%AA%DB%8C%D8%B4%D8%B1%D8%AA-%D8%B7%D8%B1%D8%AD-%D9%85%D8%A7%D9%87-3.webp",
    productCount: 2
  },
  {
    id:3,
    productName: "شلوار جین دخترانه",
    price: "900000",
    productImage: "https://www.sarabara.com/wp-content/uploads/2025/09/womens-jeans-9003140-bl05-1.jpg",
    productCount: 2
  }
]
