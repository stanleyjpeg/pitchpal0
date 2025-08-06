"use client";
import React from "react";
import { useRouter } from "next/navigation";

const templates = [
  {
    title: "TikTok Product Hype",
    description: "A punchy, energetic script for TikTok Shop or viral product videos.",
    script: "Check out this must-have product! It's trending everywhere...",
  },
  {
    title: "Shopify Landing Page",
    description: "A persuasive script for e-commerce landing pages.",
    script: "Welcome to your new favorite shop! Discover deals and...",
  },
  {
    title: "Instagram Reels Teaser",
    description: "A playful, short script for IG Reels.",
    script: "Ready for something new? Watch this quick demo...",
  },
];

export default function TemplatesPage() {
  const router = useRouter();
  return (
    <main className="px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Script Template Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {templates.map((tpl, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-start">
            <h2 className="font-semibold text-lg mb-2">{tpl.title}</h2>
            <p className="text-gray-600 mb-4">{tpl.description}</p>
            <pre className="bg-gray-100 rounded p-2 text-sm mb-4 w-full overflow-x-auto">{tpl.script}</pre>
            <button
              className="mt-auto rounded bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-500 transition"
              onClick={() => router.push(`/?template=${encodeURIComponent(tpl.script)}`)}
            >
              Use this template
            </button>
          </div>
        ))}
      </div>
    </main>
  );
} 