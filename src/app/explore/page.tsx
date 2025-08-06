"use client";
import React from "react";

const samples = [
  {
    type: "video",
    title: "Sample Pitch Video",
    src: "/mock-video.mp4",
    thumbnail: "/logo.svg",
  },
  {
    type: "audio",
    title: "Sample Voice Pitch",
    src: "/mock-voice.mp3",
    thumbnail: "/avatar1.jpg",
  },
];

export default function ExplorePage() {
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Explore Demo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {samples.map((sample, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-full relative mb-3">
              {sample.type === "video" ? (
                <div className="relative">
                  <video
                    src={sample.src}
                    controls
                    poster={sample.thumbnail}
                    className="w-full rounded"
                  />
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">WATERMARK</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <img src={sample.thumbnail} alt="Audio thumbnail" className="w-24 h-24 rounded-full mb-2 object-cover" />
                  <audio controls src={sample.src} className="w-full" />
                  <span className="mt-1 text-xs text-gray-500">Sample Audio</span>
                </div>
              )}
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-lg">{sample.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 