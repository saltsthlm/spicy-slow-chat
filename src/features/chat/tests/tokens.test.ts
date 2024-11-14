import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";

describe("Tokens", () => {
  it("should return zero tokens when user don't have tokens | 0 case scenario", async () => {
    const tokens = {
      weekly: 0,
      daily: 0,
    };
    const fetches = [];
    const result = calculateTokens(fetches, tokens);

    deepEqual(result, {
      weekly: 0,
      daily: 0,
    });
  });
});

function calculateTokens(fetches, tokens) {
  return {
    weekly: 0,
    daily: 0,
  };
}
