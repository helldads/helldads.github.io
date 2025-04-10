"use client"; // Ensures this runs on the client side

import { useState, useEffect } from "react";

export default function useStats() {
  const [stats, setStats] = useState<{
    reddit: {
      subscribers: number;
      active_user_count: number;
    };
    discord: {
      approximate_member_count: number;
      approximate_presence_count: number;
    };
    youtube: {
      subscriber_count: number;
      video_count: number;
    };
    lastUpdated: string;
  } | null>(null);

  const [lastFetchAttempt, setLastFetchAttempt] = useState<number | null>(null);

  async function fetchStats() {
    try {
      const response = await fetch("/data/stats.json", { cache: "no-store" });

      if (!response.ok) throw new Error("Failed to fetch stats");

      const data = await response.json();

      setStats(data);
    } catch (error) {
      console.error("Error loading stats:", error);
    } finally {
      setLastFetchAttempt(Date.now()); // Update last attempt time
    }
  }

  useEffect(() => {
    async function checkAndFetchStats() {
      const now = Date.now();
      const oneHour = 60 * 60 * 1000;

      if (stats?.lastUpdated) {
        const lastUpdatedTime = new Date(stats.lastUpdated).getTime();

        if (now - lastUpdatedTime > oneHour) {
          // Check if we already attempted fetching within the last hour
          if (!lastFetchAttempt || now - lastFetchAttempt > oneHour) {
            await fetchStats();
          }
        }
      } else {
        // No stats found, fetching fresh data...
        await fetchStats();
      }
    }

    checkAndFetchStats(); // Check on mount
  }, [stats, lastFetchAttempt]); // Dependency on `stats` and `lastFetchAttempt`

  return stats;
}
