import useEventModal from "../../hooks/useEventModal";

export default function EventModal() {
  const {
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
    labelsClasses,
  } = useEventModal();

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <button onClick={() => setShowEventModal(false)}>
                <span
                  onClick={() => {
                    dispatchCallEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    setShowEventModal(false);
                  }}
                  className="material-icons-outlined text-gray-400 cursor-pointer"
                >
                  delete
                </span>
              </button>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 transition border-color duration-500 ease-in-out"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex gap-x-2">
              <span className="mr-2 material-icons-outlined text-gray-400">
                event
              </span>
              <p>{daySelected.format("dddd, MMMM DD")}</p>
            </div>
            <div className="flex gap-x-2">
              <span className="mr-2 material-icons-outlined text-gray-400">
                schedule
              </span>
              <input
                type="time"
                name="description"
                value={time}
                required
                className="border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 transition border-color duration-500 ease-in-out"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="flex gap-x-2">
              <span className="mr-2 material-icons-outlined text-gray-400">
                location_on
              </span>
              <input
                type="text"
                name="city"
                placeholder="Add a city"
                value={city}
                required
                className="border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 transition border-color duration-500 ease-in-out"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="flex gap-x-2">
              <span className="mr-2 material-icons-outlined text-gray-400">
                bookmark_border
              </span>
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end w-100 border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
