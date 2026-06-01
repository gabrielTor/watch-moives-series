"use client";

import { useState, useEffect, useTransition } from "react";
import {
  getVideosAction,
  addVideoAction,
  toggleVideoAction,
  deleteVideoAction,
} from "@/_actions/videoActions";

interface Video {
  _id: string;
  url: string;
  active: boolean;
  language: "en" | "es";
}

export function Dashboard() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [newUrl, setNewUrl] = useState("");
  const [newLang, setNewLang] = useState<"en" | "es">("en");
  const [isPending, startTransition] = useTransition();

  async function refresh() {
    const data = await getVideosAction();
    setVideos(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!newUrl.trim()) return;
    startTransition(async () => {
      await addVideoAction(newUrl.trim(), newLang);
      setNewUrl("");
      await refresh();
    });
  }

  function handleToggle(id: string) {
    startTransition(async () => {
      await toggleVideoAction(id);
      await refresh();
    });
  }

  function handleDelete(id: string) {
    startTransition(async () => {
      await deleteVideoAction(id);
      await refresh();
    });
  }

  return (
    <div className="text-white p-8 pt-20 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Video Domains</h1>

      {/* Add URL */}
      <form onSubmit={handleAdd} className="flex flex-col gap-3 mb-10">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="https://example.com/video"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            className="flex-1 bg-gray-800 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newLang}
            onChange={(e) => setNewLang(e.target.value as "en" | "es")}
            className="bg-gray-800 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-white"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
          <button
            type="submit"
            disabled={isPending}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-5 py-2 rounded-lg font-semibold transition"
          >
            Add
          </button>
        </div>
      </form>

      {/* Video List */}
      <div className="flex flex-col gap-3">
        {videos.length === 0 && (
          <p className="text-gray-500">No video domains yet.</p>
        )}
        {videos.map((v) => (
          <div
            key={v._id}
            className="flex items-center justify-between bg-gray-900 px-5 py-3 rounded-xl"
          >
            <span
              className={`flex-1 truncate ${v.active ? "text-white" : "text-gray-500 line-through"}`}
            >
              {v.url}
            </span>
            <span
              className={`ml-3 px-2 py-0.5 rounded text-xs font-bold ${
                v.language === "es"
                  ? "bg-yellow-700 text-yellow-100"
                  : "bg-blue-800 text-blue-100"
              }`}
            >
              {(v.language ?? "en").toUpperCase()}
            </span>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => handleToggle(v._id)}
                disabled={isPending}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                  v.active
                    ? "bg-yellow-600 hover:bg-yellow-700"
                    : "bg-green-600 hover:bg-green-700"
                } disabled:opacity-50`}
              >
                {v.active ? "Deactivate" : "Activate"}
              </button>
              <button
                onClick={() => handleDelete(v._id)}
                disabled={isPending}
                className="px-3 py-1 rounded-lg text-sm font-medium bg-red-700 hover:bg-red-800 disabled:opacity-50 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
