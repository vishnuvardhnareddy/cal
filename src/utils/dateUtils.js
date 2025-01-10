// src/utils/dateUtils.js

/**
 * Get all days of a specific month.
 * @param {Date} date - The date object for the current month.
 * @returns {Date[]} - Array of Date objects representing each day in the month.
 */
export const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0); // Last day of the month

    const days = [];
    for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
        days.push(new Date(year, month, i));
    }

    // Add preceding and following days for a complete grid
    const startDay = firstDay.getDay(); // 0 (Sun) to 6 (Sat)
    const endDay = lastDay.getDay();

    // Prepend days from the previous month
    if (startDay > 0) {
        for (let i = startDay - 1; i >= 0; i--) {
            days.unshift(new Date(year, month, -i));
        }
    }

    // Append days from the next month
    if (endDay < 6) {
        for (let i = 1; i <= 6 - endDay; i++) {
            days.push(new Date(year, month + 1, i));
        }
    }

    return days;
};

/**
 * Check if two Date objects represent the same day.
 * @param {Date} date1
 * @param {Date} date2
 * @returns {boolean}
 */
export const isSameDay = (date1, date2) => {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
};

/**
 * Format a date into a readable string (e.g., "January 1, 2025").
 * @param {Date} date
 * @returns {string}
 */
export const formatDate = (date) => {
    return date.toLocaleDateString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};
