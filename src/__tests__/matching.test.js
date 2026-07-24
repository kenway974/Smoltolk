import { describe, it, expect } from "vitest";
import { matchSituations } from "../utils/matching";
import { SITUATIONS_DATA } from "../data/situations";

describe("matchSituations", () => {
  it("never returns an empty array with no criteria", () => {
    const res = matchSituations(SITUATIONS_DATA, {});
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBeGreaterThan(0);
  });

  it("returns non-empty, relevant results for a specific lieu", () => {
    const lieu = "Boulangerie";
    const res = matchSituations(SITUATIONS_DATA, { lieu });
    expect(res.length).toBeGreaterThan(0);
    // lieu is the one hard filter: every result must belong to that environnement.
    for (const s of res) {
      expect(s.environnement).toBe(lieu);
    }
  });

  it("tags each result with an __exact flag", () => {
    const res = matchSituations(SITUATIONS_DATA, { lieu: "Boulangerie" });
    for (const s of res) {
      expect(typeof s.__exact).toBe("boolean");
    }
  });
});
