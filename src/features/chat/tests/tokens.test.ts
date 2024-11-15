import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";
import { calculateRemainingTokens } from "../logic/tokens";

describe("Token Calculation:", () => {
  describe("by day:", () => {
    it("should return initial tokens when there are 0 fetches | 0 case scenario", async () => {
      const tokens = { weekly: 0, daily: 0 };
      const fetches = 0;
      const result = calculateRemainingTokens(fetches, tokens);

      deepEqual(result, { weekly: 0, daily: 0 });
    });

    it("should return right amount of tokens | 1 case scenario", () => {
      const tokens = { weekly: 2, daily: 1 };
      const fetches = 1;
      const result = calculateRemainingTokens(fetches, tokens);
      deepEqual(result, { weekly: 2, daily: 0 });
    });

    it("should return right amount of tokens | many case scenario", () => {
      const tokens = { weekly: 2, daily: 1 };
      const fetches = 2;
      const result = calculateRemainingTokens(fetches, tokens);
      deepEqual(result, { weekly: 1, daily: 0 });
    });

    it("should return right amount of tokens | many case scenario", () => {
      const tokens = { weekly: 2, daily: 1 };
      const fetches = 3;
      const result = calculateRemainingTokens(fetches, tokens);
      deepEqual(result, { weekly: 0, daily: 0 });
    });
  });
});
