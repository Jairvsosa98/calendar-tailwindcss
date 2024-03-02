import {Slide, toast } from "react-toastify";

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
          ? `The Event ${element.title} will start in ${hoursUntilEvent} hours in the city ${element.city}`
          : `Event ${element.title} has started`;
      toast.info(eventStartsIn, {
        position: "top-right",
        transition: Slide,
        draggablePercent: "mouse",
        theme: "colored",
      });
    }
  });
}
export function getDayClass(day, daySelected) {
  const format = "DD-MM-YY";
  const nowDay = dayjs().format(format);
  const currentDay = day.format(format);
  const selDay = daySelected && daySelected.format(format);
  if (nowDay === currentDay) {
    return "bg-blue-500 rounded-full text-white";
  } else if (currentDay === selDay) {
    return "bg-blue-100 rounded-full text-blue-600 font-bold";
  } else {
    return "";
  }
}
