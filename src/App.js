import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./utils/util.js";
import Sidebar from "./components/Sidebar.js";
import CalendarHeader from "./components/CalendarHeader.js";
import Month from "./components/Month.js";
import GlobalContext from "./context/GlobalContext.js";
import EventModal from "./components/EventModal.js";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
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

export default App;
