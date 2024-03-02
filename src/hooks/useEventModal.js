import { useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function useEventModal() {
  const { setShowEventModal, daySelected, dispatchCallEvent, selectedEvent } =
    useContext(GlobalContext);
  const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [time, setTime] = useState(selectedEvent ? selectedEvent.time : "");
  const [city, setCity] = useState(selectedEvent ? selectedEvent.city : "");
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      time,
      city,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCallEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCallEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return {
    handleSubmit,
    title,
    setTitle,
    time,
    setTime,
    city,
    setCity,
    selectedLabel,
    setSelectedLabel,
    dispatchCallEvent,
    setShowEventModal,
    selectedEvent,
    daySelected,
    labelsClasses
  };
}
