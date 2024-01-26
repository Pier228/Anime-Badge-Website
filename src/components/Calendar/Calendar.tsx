"use client";
import Calendar from "react-calendar";
import { useState } from "react";
import "@/styles/calendar/calendar.scss";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarBadge = () => {
    const [value] = useState<Value>(new Date());

    return (
        <>
            <h1 className="calendar-header">
                {value?.toLocaleString("en", { month: "long" })}
            </h1>
            <Calendar
                value={value}
                locale="en"
                showNavigation={false}
                className="calendar"
                showNeighboringMonth={false}
            />
        </>
    );
};

export default CalendarBadge;
