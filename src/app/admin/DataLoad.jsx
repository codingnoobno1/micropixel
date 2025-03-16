"use client";

import { useEffect, useState } from "react";

export default function DataLoad() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/api/events");
      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-lg w-full text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Event List</h2>
      {events.length === 0 ? (
        <p className="text-gray-400">No events found.</p>
      ) : (
        <ul className="space-y-3">
          {events.map((event) => (
            <li key={event._id} className="bg-gray-800 p-3 rounded-md">
              <strong>{event.title}</strong> - {new Date(event.date).toDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
