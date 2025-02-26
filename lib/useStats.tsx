"use client"; // Ensures this runs on the client side

import { useState, useEffect } from "react";

export default function useStats() {
  const [stats, setStats] = useState<{
    reddit: { subscribers: number };
    discord: {
      approximate_member_count: number;
      approximate_presence_count: number;
    };
    lastUpdated: string;
  } | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/data/stats.json");

        if (!response.ok) throw new Error("Failed to fetch stats");
        const data = await response.json();

        setStats(data);
      } catch (error) {
        console.log("Error loading stats:", error);
      }
    }

    fetchStats();
  }, []);

  return stats;
}
