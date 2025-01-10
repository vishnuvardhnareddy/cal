import React, { useState } from "react";
import CalendarGrid from "./components/CalendarGrid.jsx";
import EventList from "./components/EventList.jsx";
import EventModal from "./components/EventModal.jsx";

function App() {
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, { ...newEvent, date: selectedDay }]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <CalendarGrid events={events} onDayClick={handleDayClick} />

      {selectedDay && (
        <EventList
          events={events.filter((event) =>
            new Date(event.date).toDateString() === selectedDay.toDateString()
          )}
        />
      )}

      <button className="add-event-button" onClick={() => setIsModalOpen(true)}>Add Event</button>

      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddEvent}
        event={null} // You can pass `null` for a new event
      />
    </div>
  );
}

export default App;
