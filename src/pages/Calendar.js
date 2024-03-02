import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../utils/util.js";
import Sidebar from "../components/calendar/Sidebar.js";
import CalendarHeader from "../components/calendar/CalendarHeader.js";
import Month from "../components/calendar/Month.js"
import GlobalContext from "../context/GlobalContext.js";
import EventModal from "../components/calendar/EventModal.js";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
