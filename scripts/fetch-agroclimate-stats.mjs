// Runs in CI only (GitHub Actions). Fetches usage stats from the Firebase
// Realtime Database REST endpoint and writes them to data/agroclimate-stats.json.
// No Firebase SDK or client-side keys required.

import { writeFile } from "node:fs/promises";

const databaseUrl = process.env.AGROCLIMATE_DB_URL;
if (!databaseUrl) {
  throw new Error("AGROCLIMATE_DB_URL environment variable is required");
}

const base = databaseUrl.endsWith("/") ? databaseUrl : `${databaseUrl}/`;
const res = await fetch(`${base}unique-users.json`);
if (!res.ok) {
  throw new Error(`Firebase REST fetch failed: ${res.status} ${res.statusText}`);
}

const allDates = (await res.json()) || {};

const uniqueIds = new Set();
let totalVisits = 0;
for (const dateData of Object.values(allDates)) {
  for (const [userId, user] of Object.entries(dateData)) {
    uniqueIds.add(userId);
    totalVisits += user.visits || 0;
  }
}

const stats = {
  totalUsers: uniqueIds.size,
  totalVisits,
  updatedAt: new Date().toISOString(),
};

await writeFile(
  new URL("../data/agroclimate-stats.json", import.meta.url),
  `${JSON.stringify(stats, null, 2)}\n`
);

console.log("Wrote data/agroclimate-stats.json:", stats);
