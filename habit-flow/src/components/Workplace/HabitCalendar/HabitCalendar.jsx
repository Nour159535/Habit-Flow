import { useState } from 'react';
import dayjs from 'dayjs';
import './HabitCalendar.css';

function HabitCalendar() {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [selectedDate, setSelectedDate] = useState(dayjs());

    function previousMonth() {
        setCurrentDate(currentDate.subtract(1, "month"));
    }

    function nextMonth() {
        setCurrentDate(currentDate.add(1, "month"));
    }
    const days = Array.from({ length: currentDate.daysInMonth() }, (element, index) => index + 1);

    const firstWeekday = currentDate.startOf("month").day();

    const emptyDays = Array.from({
        length: firstWeekday
});


    return (
        <div className="habit-calendar">
            <div className="calendar-header">
                <button
                    className="month-nav"
                    onClick={previousMonth}
                    aria-label="Previous month"
                >
                    ‹
                </button>

                <h3>{currentDate.format("MMMM YYYY")}</h3>

                <button
                    className="month-nav"
                    onClick={nextMonth}
                    aria-label="Next month"
                >
                    ›
                </button>
            </div>

            <div className="weekdays">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (weekday) => (
                        <span key={weekday}>{weekday}</span>
                    )
                )}
            </div>

            <div className="days">
                {emptyDays.map((_, index) => (
                    <div className="empty-day" key={`empty-${index}`}>
                    </div>
                ))}

                {days.map((day) => {
                    const isSelected =
                        selectedDate.format("YYYY-MM-DD") ===
                        currentDate.date(day).format("YYYY-MM-DD");

                    return (
                        <button
                            className={`calendar-day ${isSelected ? "selected" : ""}`}
                            key={day}
                            onClick={() => setSelectedDate(currentDate.date(day))}
                        >
                            <span>{day}</span>
                            <span className="activity-dot" />
                        </button>
                    );
                })}
            </div>

            <div className="today-active-habit">
                <p className='habit-activity'>Habit activity</p>
                <p className='today'>Today</p>
            </div>
        </div>
    );

}

export default HabitCalendar;