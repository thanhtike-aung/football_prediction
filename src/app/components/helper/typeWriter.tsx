"use client";

import { TypeWriterProps } from "@/app/types/common";
import { useEffect, useState } from "react";

const TypeWriter: React.FC<TypeWriterProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <>
      <div className="font-mono text-base">
        {displayedText}
        <span className="animate-blink">|</span>
      </div>
    </>
  );
};

export default TypeWriter;
