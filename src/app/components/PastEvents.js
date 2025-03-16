"use client";

export default function PastEvents({ events }) {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-4 text-red-400">📅 Past Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id} className="bg-gray-700 p-5 rounded-lg shadow-md opacity-80">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded-md grayscale"
              />
              <h3 className="text-xl font-bold mt-3">{event.title}</h3>
              <p className="text-gray-400">{event.description}</p>
              <p className="text-sm text-gray-500">📅 {new Date(event.date).toDateString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No past events</p>
        )}
      </div>
    </div>
  );
}
