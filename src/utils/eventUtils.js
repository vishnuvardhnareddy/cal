// src/utils/eventUtils.js

/**
 * Validate an event for overlapping times.
 * @param {Array} events - Array of existing events for the day.
 * @param {Object} newEvent - The new event to validate.
 * @returns {boolean} - True if no overlap, false otherwise.
 */
export const isEventValid = (events, newEvent) => {
    const newStart = new Date(`1970-01-01T${newEvent.startTime}:00`);
    const newEnd = new Date(`1970-01-01T${newEvent.endTime}:00`);

    for (const event of events) {
        const existingStart = new Date(`1970-01-01T${event.startTime}:00`);
        const existingEnd = new Date(`1970-01-01T${event.endTime}:00`);

        if (
            (newStart >= existingStart && newStart < existingEnd) || // Starts during another event
            (newEnd > existingStart && newEnd <= existingEnd) || // Ends during another event
            (newStart <= existingStart && newEnd >= existingEnd) // Encloses another event
        ) {
            return false;
        }
    }
    return true;
};

/**
 * Filter events by a keyword in their name or description.
 * @param {Array} events - List of events.
 * @param {string} keyword - Keyword to filter by.
 * @returns {Array} - Filtered list of events.
 */
export const filterEvents = (events, keyword) => {
    return events.filter(
        (event) =>
            event.name.toLowerCase().includes(keyword.toLowerCase()) ||
            (event.description &&
                event.description.toLowerCase().includes(keyword.toLowerCase()))
    );
};

/**
 * Save events to localStorage.
 * @param {string} key - Storage key.
 * @param {Object} data - Data to store.
 */
export const saveEventsToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

/**
 * Load events from localStorage.
 * @param {string} key - Storage key.
 * @returns {Object} - Parsed events or empty object if not found.
 */
export const loadEventsFromStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
};
