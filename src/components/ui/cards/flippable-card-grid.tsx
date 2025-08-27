"use client";

import { useEffect, useRef, useState } from "react";
import FlippableCard from "./flippable-card";

interface Card {
  front: React.ReactNode;
  back: React.ReactNode;
}

export default function CardGrid({ cards }: { cards: Card[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState(0);
  const [, setRerender] = useState(0);

  const measureCardHeight = () => {
    if (containerRef.current) {
      // measure all FlippableCard wrappers
      const heights = Array.from(containerRef.current.children).map(
        (child) => (child as HTMLElement).scrollHeight
      );
      setCardHeight(Math.max(...heights));
    }
  };

  useEffect(() => {
    // Initial measurement
    measureCardHeight();

    const handleResize = () => {
      setRerender((v) => v + 1); // force re-render
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div key={i} style={{ height: cardHeight }}>
          <FlippableCard front={card.front} back={card.back} />
        </div>
      ))}
    </div>
  );
}
