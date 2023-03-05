"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Card from "./Card";

export default function CalendarComponent() {
  return (
    <div className="flex flex-col w-full h-full">
      <Calendar className="w-full drop-shadow-xl border-violet-400" />
    </div>
  );
}
