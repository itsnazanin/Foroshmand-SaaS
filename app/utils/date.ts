import dayjs from "dayjs";
import jalaliday from "jalaliday";
import "dayjs/locale/fa"; // ← این خط خیلی مهمه

dayjs.extend(jalaliday);
dayjs.locale("fa"); // ← لوکال فارسی

export function getDateKey(date: string) {
  return dayjs(date).calendar("jalali").format("YYYY-MM-DD");
}

export function formatChatDate(date: string) {
  const msgDate = dayjs(date).calendar("jalali");
  const now = dayjs().calendar("jalali");

  if (msgDate.isSame(now, "day")) return "امروز";
  if (msgDate.isSame(now.subtract(1, "day"), "day")) return "دیروز";

  const day = msgDate.format("D");
  const month = msgDate.format("MMMM");
  const year = msgDate.format("YYYY");

  // اگر سال فرق داره
  if (msgDate.year() !== now.year()) {
    return `${day}   ${month}   ${year}`; // دو فاصله
  }

  // فقط روز و ماه
  return `${day}   ${month}`;
}