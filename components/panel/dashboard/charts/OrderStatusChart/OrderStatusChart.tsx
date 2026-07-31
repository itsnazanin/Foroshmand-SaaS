interface ChartData {
  label: string;
  value: number;
  color: string;
}

interface OrderStatusChartProps {
  data?: ChartData[];
  title?: string;
}

const defaultData: ChartData[] = [
  { label: 'ثبت شده', value: 50, color: '#00c853' },
  { label: 'در انتظار پرداخت', value: 30, color: '#ffc107' },
  { label: 'لغو شده', value: 20, color: '#ff5252' },
];

// تبدیل عدد انگلیسی به فارسی
const toPersianNumber = (num: number) => {
  return num.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]);
};

export default function OrderStatusChart({
  data = defaultData,
  title = 'وضعیت سفارشات',
}: OrderStatusChartProps) {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const labelRadius = 35;

  // محاسبه کاملاً pure با reduce
  const segments = data.reduce<
    {
      label: string;
      value: number;
      color: string;
      dashArray: string;
      dashOffset: number;
      labelX: number;
      labelY: number;
    }[]
  >((acc, item) => {
    const startPercent = acc.reduce((sum, seg) => sum + seg.value, 0);
    const length = (item.value / 100) * circumference;
    const midPercent = startPercent + item.value / 2;

    // زاویه وسط بخش (شروع از بالای دایره)
    const midAngle = (midPercent / 100) * 360 - 90;
    const radian = (midAngle * Math.PI) / 180;

    const x = 50 + labelRadius * Math.cos(radian);
    const y = 50 + labelRadius * Math.sin(radian);

    acc.push({
      ...item,
      dashArray: `${length} ${circumference - length}`,
      dashOffset: -((startPercent / 100) * circumference),
      labelX: x,
      labelY: y,
    });

    return acc;
  }, []);

  return (
    <div className="relative flex items-center justify-around border border-[#531C79] w-full h-full py-7 sm:px-8 sm:py-9" dir="ltr">
      {/* عنوان */}
      <h3 className="absolute top-5 right-5 sm:top-6 sm:right-7 text-white laptop:text-[18px] lg:text-[20px] sm:text-[22px] font-semibold m-0">
        {title}
      </h3>

      <div className="flex flex-col justify-center pt-10 items-center laptop:gap-0 laptop:flex-col lg:pt-12 lg:justify-between gap-4">
        {/* نمودار */}
        <div className="relative md:w-62.5 md:h-62.5 sm:w-55 sm:h-55 shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* حلقه پس‌زمینه */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#1a0b2e"
              strokeWidth="18"
            />

            {/* بخش‌های رنگی */}
            {segments.map((segment, index) => (
              <circle
                key={index}
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth="18"
                strokeDasharray={segment.dashArray}
                strokeDashoffset={segment.dashOffset}
                strokeLinecap="butt"
              />
            ))}
          </svg>

          {/* متن وسط */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[15px] sm:text-[20px] font-semibold pointer-events-none">
            سفارشات
          </div>

          {/* درصدهای داینامیک */}
          {segments.map((segment, index) => (
            <div
              key={index}
              className="absolute text-white text-[12px] sm:text-[14px] font-semibold pointer-events-none"
              style={{
                left: `${segment.labelX}%`,
                top: `${segment.labelY}%`,
                transform: 'translate(-50%, -20%)',
              }}
            >
              {toPersianNumber(segment.value)}٪
            </div>
          ))}
        </div>

        {/* لجند */}
        <div className="flex flex-row-reverse laptop:pt-4 laptop:w-full laptop:justify-center laptop:flex-row-reverse lg:flex-col gap-3 sm:gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex laptop:mt-2 laptop:gap-1 laptop:text-[14px] flex-row-reverse items-center gap-2 sm:gap-3 text-white md:text-base text-[14px]"
            >
              <span
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}