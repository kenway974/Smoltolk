import { describe, it, expect } from "vitest";
import {
  computeXP,
  computeLevel,
  computeStats,
  computeWins,
  exportData,
  importData,
  LEVELS,
} from "../utils/journal";

// XP model (from journal.js): 12 XP per entry, +8 bonus if a debrief field
// (marche or prochaine) is present. Done missions/bosses add their own xp.
// mission "sourire-passant" = 10 xp ; boss "boss-triple" = 90 xp.

describe("computeXP", () => {
  it("gives 12 XP per entry and +8 for a filled debrief, plus mission/boss xp", () => {
    const entries = [
      { id: "a", at: 1000, resultat: "ok" },                      // 12
      { id: "b", at: 2000, resultat: "top", marche: "ça a bien pris" }, // 12 + 8
      { id: "c", at: 3000, resultat: "court", prochaine: "réessayer demain" }, // 12 + 8
    ];
    // entries only: 12 + 20 + 20 = 52
    expect(computeXP(entries, {}, {})).toBe(52);

    // + mission (10) + boss (90) = 152
    const total = computeXP(
      entries,
      { "sourire-passant": 111 },
      { "boss-triple": 222 }
    );
    expect(total).toBe(52 + 10 + 90);
  });

  it("ignores unknown mission/boss ids", () => {
    expect(computeXP([], { "does-not-exist": 1 }, { "nope": 1 })).toBe(0);
  });
});

describe("computeLevel", () => {
  it("maps xp below 60 to level 1", () => {
    const l0 = computeLevel(0);
    expect(l0.level).toBe(1);
    expect(l0.titre).toBe("Premiers pas");
    expect(l0.pct).toBe(0);

    const l50 = computeLevel(50);
    expect(l50.level).toBe(1);
    expect(l50.titre).toBe("Premiers pas");
    expect(l50.toNext).toBe(60 - 50); // 10 xp to reach the 60 threshold
    expect(l50.pct).toBeGreaterThanOrEqual(0);
    expect(l50.pct).toBeLessThanOrEqual(100);
  });

  it("maps a known xp to the expected level, titre and pct", () => {
    // 150 is exactly the "En mouvement" threshold (level index 2 -> level 3)
    const l = computeLevel(150);
    expect(l.level).toBe(3);
    expect(l.titre).toBe("En mouvement");
    expect(l.into).toBe(0);
    expect(l.pct).toBe(0);
    expect(l.toNext).toBe(300 - 150); // next threshold is 300
    expect(l.pct).toBeGreaterThanOrEqual(0);
    expect(l.pct).toBeLessThanOrEqual(100);
  });

  it("caps at the last level with pct 100 and toNext 0", () => {
    const last = LEVELS[LEVELS.length - 1];
    const l = computeLevel(last.min + 500);
    expect(l.level).toBe(LEVELS.length);
    expect(l.titre).toBe(last.titre);
    expect(l.pct).toBe(100);
    expect(l.toNext).toBe(0);
    expect(l.next).toBeNull();
  });
});

describe("computeStats", () => {
  // Wed Jan 21 2026 at noon — a stable, non-boundary point in time.
  const now = new Date(2026, 0, 21, 12, 0, 0).getTime();
  const DAY = 86400000;

  const entries = [
    { id: "t", at: now, resultat: "top", ressenti: 5, lieu: "Boulangerie" },      // today (Wed)
    { id: "y", at: now - DAY, resultat: "ok", ressenti: 3, lieu: "Café" },        // yesterday (Tue)
    { id: "d", at: now - 2 * DAY, resultat: "court", ressenti: 4, lieu: "Café" }, // 2 days ago (Mon)
  ];

  it("computes total, streak, week count and average ressenti", () => {
    const s = computeStats(entries, now);
    expect(s.total).toBe(3);
    // three consecutive days ending today -> streak of 3
    expect(s.currentStreak).toBe(3);
    // Mon/Tue/Wed all fall within the current (Monday-based) week
    expect(s.thisWeekCount).toBe(3);
    // (5 + 3 + 4) / 3 = 4
    expect(s.avgRessenti).toBe(4);
  });

  it("breaks the current streak when the most recent entry is too old", () => {
    const old = [{ id: "o", at: now - 5 * DAY, resultat: "ok", ressenti: 3 }];
    const s = computeStats(old, now);
    expect(s.total).toBe(1);
    expect(s.currentStreak).toBe(0);
  });

  it("returns null avgRessenti when no entry is rated", () => {
    const s = computeStats([{ id: "n", at: now, resultat: "ok" }], now);
    expect(s.avgRessenti).toBeNull();
  });
});

describe("computeWins", () => {
  it("keeps entries with resultat 'top' or ressenti >= 4, excludes the rest", () => {
    const entries = [
      { id: "w1", at: 1, resultat: "top", ressenti: 2 }, // in: resultat top
      { id: "w2", at: 2, resultat: "ok", ressenti: 4 },  // in: ressenti >= 4
      { id: "w3", at: 3, resultat: "ok", ressenti: 5 },  // in: ressenti >= 4
      { id: "x1", at: 4, resultat: "ok", ressenti: 3 },  // out
      { id: "x2", at: 5, resultat: "court" },            // out: no ressenti, not top
    ];
    const wins = computeWins(entries);
    const ids = wins.map((e) => e.id);
    expect(ids).toEqual(["w1", "w2", "w3"]);
  });
});

describe("exportData / importData", () => {
  it("exports valid JSON with an entries array", () => {
    const json = exportData();
    const parsed = JSON.parse(json);
    expect(Array.isArray(parsed.entries)).toBe(true);
    expect(parsed.version).toBe(1);
  });

  it("imports fresh ids and dedupes on a second import", () => {
    const payload = JSON.stringify({
      version: 1,
      entries: [
        { id: "imp-1", at: 1000, resultat: "ok" },
        { id: "imp-2", at: 2000, resultat: "top" },
      ],
    });

    const res = importData(payload);
    expect(res.ok).toBe(true);
    expect(res.added).toBe(2);

    // Re-importing the same ids adds nothing (dedup by id).
    const res2 = importData(payload);
    expect(res2.ok).toBe(true);
    expect(res2.added).toBe(0);

    // The imported entries are now present in the export.
    const parsed = JSON.parse(exportData());
    const ids = parsed.entries.map((e) => e.id);
    expect(ids).toContain("imp-1");
    expect(ids).toContain("imp-2");
  });

  it("rejects malformed input", () => {
    expect(importData("not json").ok).toBe(false);
    expect(importData(JSON.stringify({ version: 1 })).ok).toBe(false); // no entries array
  });
});
