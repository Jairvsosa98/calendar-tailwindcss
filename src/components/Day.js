import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
export default function Day({ day, rowIdx }) {
  const {
    setDaySelected,
    setShowEventModal,
    setSelectedEvent,
    filteredEvents,
  } = useContext(GlobalContext);
  const [dayEvents, setDayEvents] = useState([]);
  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  function getWeekendDayClass() {
    return day.format("ddd") === "Sat" || day.format("ddd") === "Sun"
      ? "font-bold text-red-400"
      : "";
  }

  return (
    <div className="border border-gray-400 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className={`text-sm mt-1 ${getWeekendDayClass()}`}>
            {day.format("ddd")}
          </p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()} ${getWeekendDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, i) => (
          <div
            key={i}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-400 p-1 mr-3 text-white text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}
