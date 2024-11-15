import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";
import { calculateRemainingTokens, calculateTokens } from "../logic/tokens";

describe("Token Calculation:", () => {
  describe("by day:", () => {
    it("should return initial tokens when there are 0 fetches | 0 case scenario", async () => {
      const initialTokens = { weekly: 1, daily: 1 };
      const fetches = 0;
      const result = calculateRemainingTokens(fetches, initialTokens);

      deepEqual(result, { weekly: 1, daily: 1 });
    });

    it("should return right amount of tokens | 1 case scenario", () => {
      const initialTokens = { weekly: 2, daily: 1 };
      const fetches = 1;
      const result = calculateRemainingTokens(fetches, initialTokens);
      deepEqual(result, { weekly: 2, daily: 0 });
    });

    it("should return right amount of tokens | many case scenario", () => {
      const initialTokens = { weekly: 2, daily: 1 };
      const fetches = 2;
      const result = calculateRemainingTokens(fetches, initialTokens);
      deepEqual(result, { weekly: 1, daily: 0 });
    });

    it("should return right amount of tokens | many case scenario", () => {
      const initialTokens = { weekly: 2, daily: 1 };
      const fetches = 3;
      const result = calculateRemainingTokens(fetches, initialTokens);
      deepEqual(result, { weekly: 0, daily: 0 });
    });
  });

  describe("Total: ", () => {
    it("should return unchaged initial tokens if there were no fetches | 0 case", () => {
      const numbersOfFetches = [0];
      const result = calculateTokens(numbersOfFetches);

      deepEqual(result, { weekly: 2, daily: 1 });
    });

    it("should return right amount of tokens | many case", () => {
      const numbersOfFetches = [0, 1, 0, 1, 2, 0, 1];
      const result = calculateTokens(numbersOfFetches);

      deepEqual(result, { weekly: 1, daily: 0 });
    });
  });
});
