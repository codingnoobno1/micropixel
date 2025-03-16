"use client";

export default function UpcomingEvents({ events }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-green-400">🚀 Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id} className="bg-gray-800 p-5 rounded-lg shadow-md">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-3">{event.title}</h3>
              <p className="text-gray-300">{event.description}</p>
              <p className="text-sm text-gray-400">📅 {new Date(event.date).toDateString()}</p>
              <a
                href={event.registerLink}
                target="_blank"
                className="block mt-3 text-blue-400 underline"
              >
                Register Now
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No upcoming events</p>
        )}
      </div>
    </div>
  );
}
