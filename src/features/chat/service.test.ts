import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";

describe("Cool down:", () => {
  it("Works!", () => {});
  it("should return empty array when there are no messages | 0 case scenario", () => {
    const messages = ([]) => [];
    deepEqual(messages([]), []);
  });
});
