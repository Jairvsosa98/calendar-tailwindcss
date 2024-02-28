import { toast } from "react-toastify";

const dayjs = require("dayjs");

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const dayArray = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return dayArray;
}
export function convertTimeAndSendNotification(parsedEvents) {
  parsedEvents.forEach((element) => {
    if (dayjs(element.day).format("DD-MM-YY") === dayjs().format("DD-MM-YY")) {
      const [hour, minute] = element.time.split(":").map(Number); // Dividir la cadena y convertir a números
      const horaDayjs = dayjs().set("hour", hour).set("minute", minute);
      const eventTime = dayjs(horaDayjs, "HH:mm");
      const hoursUntilEvent = eventTime.diff(dayjs(), "hour");
      const eventStartsIn =
        hoursUntilEvent > 0
          ? `El evento ${element.title} comienza en ${hoursUntilEvent} horas en la ciudad ${element.city}`
          : `El evento ${element.title} ha comenzado`;
      toast.info(eventStartsIn);
    }
  });
}
