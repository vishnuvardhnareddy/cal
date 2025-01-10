import React, { useState } from "react";
import { getDaysInMonth, isSameDay } from "../utils/dateUtils";

const CalendarGrid = ({ events = [], onDayClick }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const days = getDaysInMonth(currentDate);

    const handlePreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    return (
        <div className="calendar-container">
            <header>
                <button onClick={handlePreviousMonth}>Previous</button>
                <h2>{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
                <button onClick={handleNextMonth}>Next</button>
            </header>
            <div className="calendar-grid">
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`day ${isSameDay(day, new Date()) ? "current-day" : ""}`}
                        onClick={() => onDayClick && onDayClick(day)}
                    >
                        {day.getDate()}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarGrid;
