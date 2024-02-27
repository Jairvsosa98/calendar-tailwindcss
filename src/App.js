import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./utils/util.js";
import Sidebar from "./components/Sidebar.js";
import CalendarHeader from "./components/CalendarHeader.js";
import Month from "./components/Month.js";
import GlobalContext from "./context/GlobalContext.js";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(monthIndex);
  }, [monthIndex]);
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
