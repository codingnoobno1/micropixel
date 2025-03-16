"use client";

import { useState } from "react";
import { Calendar, FileText, Image, Link, Pencil, PlusCircle } from "lucide-react";
import DataLoad from "./DataLoad";
import Posture from "./Posture";

export default function AdminPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    image: "",
    rulebook: "",
    registerLink: "",
    eventType: "upcoming",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("✅ Event Added!");
      setForm({ title: "", description: "", date: "", image: "", rulebook: "", registerLink: "", eventType: "upcoming" });
    } else {
      alert("❌ Error Adding Event");
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-950 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Admin Panel - Add Event</h1>

      {/* Load Events */}
      <DataLoad />

      {/* Event Form */}
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-lg w-full space-y-4">
        <div className="relative">
          <Pencil className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <textarea
            name="description"
            placeholder="Event Description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400" />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <Image className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="image"
            placeholder="Google Drive Image Link"
            value={form.image}
            onChange={handleChange}
            required
            className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <FileText className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="rulebook"
            placeholder="Google Drive Rulebook Link"
            value={form.rulebook}
            onChange={handleChange}
            className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <Link className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="registerLink"
            placeholder="Registration Form Link"
            value={form.registerLink}
            onChange={handleChange}
            required
            className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="submit" className="w-full p-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold flex justify-center items-center gap-2">
          <PlusCircle /> Add Event
        </button>
      </form>

      {/* Posture Component for Image Preview */}
      <Posture form={form} />
    </div>
  );
}
