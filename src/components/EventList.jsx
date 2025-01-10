import React from "react";

const EventList = ({ events, onEdit, onDelete }) => {
    return (
        <div className="event-list-container">
            <h2>Events</h2>
            {events.length === 0 ? (
                <p>No events for the selected day.</p>
            ) : (
                <ul>
                    {events.map((event, index) => (
                        <li key={index}>
                            <div className="event-info">
                                <p>{event.name}</p>
                                <p>
                                    {event.startTime} - {event.endTime}
                                </p>
                            </div>
                            <div className="event-actions">
                                <button onClick={() => onEdit(index)} className="edit-btn">
                                    Edit
                                </button>
                                <button onClick={() => onDelete(index)} className="delete-btn">
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EventList;
