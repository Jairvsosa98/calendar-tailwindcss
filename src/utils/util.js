const dayjs = require("dayjs");

export function getMonth(month = dayjs().month()){
    const year = dayjs().year();
    const firstDayOfTheMonth  = dayjs(new Date(year,month,44)).day();
    let currentMontCount = 0 - firstDayOfTheMonth
    const dayArray = new Array(5).fill([]).map(() => {
            return new Array(7).fill(null).map(() => {
                currentMontCount++
                return dayjs(new Date(year, month, currentMontCount))
            });
    });
    return dayArray;
}