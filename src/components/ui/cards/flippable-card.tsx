"use client";

import { useState } from "react";

export default function FlippableCard({ front, back }: { front: React.ReactNode; back: React.ReactNode }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective cursor-pointer w-full h-full hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] focus:outline-none"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="front absolute inset-0 backface-hidden w-full h-full">
          <div className="shadow-[0_0_15px_rgba(0,0,0,0.6)] rounded-md bg-white/10 w-full h-full flex flex-col">
            {front}
          </div>
        </div>

        {/* Back */}
        <div className="back absolute inset-0 backface-hidden rotate-y-180 w-full h-full">
          <div className="shadow-[0_0_15px_rgba(0,0,0,0.6)] rounded-md bg-white/10 w-full h-full flex flex-col">
            {back}
          </div>
        </div>
      </div>
    </div>
  );
}
