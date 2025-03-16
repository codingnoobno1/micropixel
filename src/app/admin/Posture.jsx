"use client";

const getDriveImageUrl = (url) => {
  if (!url.includes("drive.google.com")) return url;
  const match = url.match(/\/d\/([^/]+)/);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
};

export default function Posture({ form }) {
  return (
    <div className="mt-10 p-6 bg-gray-900 rounded-xl shadow-lg max-w-lg w-full text-center">
      {form.image ? (
        <img
          src={getDriveImageUrl(form.image)}
          alt="Event Poster"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      ) : (
        <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
          No Image Preview
        </div>
      )}

      <h2 className="text-2xl font-bold mt-4">{form.title || "Event Title"}</h2>
      <p className="text-gray-300">{form.description || "Event description will appear here."}</p>
      {form.date && <p className="text-sm text-gray-400 mt-2">📅 {new Date(form.date).toDateString()}</p>}

      <div className="mt-4 space-y-2">
        {form.rulebook && (
          <>
            <a href={form.rulebook} target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:text-blue-300 underline">
              📄 View Rulebook
            </a>
            <iframe
              src={`https://docs.google.com/gview?embedded=true&url=${form.rulebook}`}
              className="w-full h-60 mt-2 border border-gray-700 rounded-lg"
              style={{ backgroundColor: "white" }}
              allowFullScreen
            ></iframe>
          </>
        )}

        {form.registerLink && (
          <a href={form.registerLink} target="_blank" rel="noopener noreferrer" className="block text-green-400 hover:text-green-300 underline">
            📝 Register Now
          </a>
        )}
      </div>
    </div>
  );
}
