"use client";

import { title } from "@/components/primitives";

import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setExplode(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1400);
    }
  }, [countdown]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen text-center transition-all ${
        explode ? "animate-explode" : ""
      }`}
    >
      <h1 className="text-3xl md:text-5xl font-bold uppercase">
        You&apos;re leaving the mission area
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold uppercase mt-4">
        404 Page Not Found | Traitor detected!
      </h2>
      <p className="mt-6">
        <Button
          as={Link}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg uppercase"
          disabled={countdown === 0}
          href="/"
        >
          Return to the combat zone: {countdown}
        </Button>
      </p>

      <style>{`
        @keyframes explode {
          0% {
            transform: scale(1);
            opacity: 1;
            color: rgba(255, 0, 0, 1);
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
            color: rgba(255, 0, 0, 0.5);
          }
          100% {
            transform: scale(3);
            opacity: 0;
            color: rgba(255, 0, 0, 0);
          }
        }

        .animate-explode {
          animation: explode 1s forwards;
        }
      `}</style>
    </div>
  );
}
