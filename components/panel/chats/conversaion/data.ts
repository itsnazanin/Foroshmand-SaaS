import { Conversation } from "@/components/panel/chats/types"


export const conversations: Conversation[] = [

{
    id:"1",
    customerName:"سارا رحیمی",
    avatar:"/image/woman.png",
    lastMessage:"سلام درباره محصول سوال داشتم",
    time:"09:30",
    createdDate: "2025-05-24",
    unreadCount:12,
    status:"needReply",
    isOnline:true
},


{
    id:"2",
    customerName:"گلاره احمدی",
    avatar:"/image/WomanGlass.jpg",
    lastMessage:"ممنون از پاسخ",
    time:"09:15",
    createdDate: "2025-05-25",
    unreadCount:0,
    status:"answered",
    isOnline:false
},

{
    id:"3",
    customerName:"کیانا حسینی",
    avatar:"/image/WomanNormalHair.jpg",
    lastMessage:"سفارش من کی حاضر میشه؟",
    time:"09:10",
    createdDate: "2025-05-26",
    unreadCount:0,
    status:"answered",
    isOnline:true
},

{
    id:"4",
    customerName:"نازنین رحمانی",
    avatar:"/image/WomanBlue.jpg",
    lastMessage:"ممنون از پاسخ",
    time:"09:20",
    createdDate: "2025-05-27",
    unreadCount:10,
    status:"needReply",
    isOnline:false
},

{
    id:"5",
    customerName:"فاطمه مرادی",
    avatar:"/image/WomanWhite.jpg",
    lastMessage:"پس من منتظرم",
    time:"07:15",
    createdDate: "2025-05-28",
    unreadCount:0,
    status:"ai",
    isOnline:false
},

{
    id:"6",
    customerName:"نرگس کریمی",
    avatar:"/image/WomanLongHair.jpg",
    lastMessage:"ممنون از پاسخگویی",
    time:"07:15",
    createdDate: "2025-05-29",
    unreadCount:0,
    status:"ai",
    isOnline:true
},

{
    id:"7",
    customerName:"کمند امیری",
    avatar:"/image/WomanLongHair.jpg",
    lastMessage:"این سفارش ها رو داشتم",
    time:"07:15",
    createdDate: "2025-05-29",
    unreadCount:0,
    status:"ai",
    isOnline:false
},

{
    id:"8",
    customerName:"ترانه کاملی",
    avatar:"/image/WomanLongHair.jpg",
    lastMessage:"ممنون از شما",
    time:"07:15",
    createdDate: "2025-05-29",
    unreadCount:5,
    status:"needReply",
    isOnline:true
},

]