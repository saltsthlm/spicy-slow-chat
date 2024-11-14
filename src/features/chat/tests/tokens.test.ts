import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";

describe("Tokens", () => {
  it("should return zero tokens when user don't have tokens | 0 case scenario", async () => {
    const tokens = { weekly: 0, daily: 0 };
    const fetches = 0;
    const result = calculateTokens(fetches, tokens);

    deepEqual(result, { weekly: 0, daily: 0 });
  });

  it("should return right amount of tokens | 1 case scenario", () => {
    const tokens = { weekly: 2, daily: 1 };
    const fetches = 1;
    const result = calculateTokens(fetches, tokens);
    deepEqual(result, { weekly: 2, daily: 0 });
  });

  it("should return right amount of tokens | many case scenario", () => {
    const tokens = { weekly: 2, daily: 1 };
    const fetches = 2;
    const result = calculateTokens(fetches, tokens);
    deepEqual(result, { weekly: 1, daily: 0 });
  });

  it("should return right amount of tokens | many case scenario", () => {
    const tokens = { weekly: 2, daily: 1 };
    const fetches = 3;
    const result = calculateTokens(fetches, tokens);
    deepEqual(result, { weekly: 0, daily: 0 });
  });
});

export type Token = { weekly: number; daily: number };

function calculateTokens(fetches: number, tokens: Token): Token {
  if (fetches === 0) {
    return tokens;
  }
  let { weekly, daily } = tokens;

  if (daily === 1) {
    daily = 0;
    fetches--;
  }
  if (fetches > 0) {
    weekly -= fetches;
  }

  return { weekly, daily };
}
